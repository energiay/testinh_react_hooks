// https://habr.com/ru/company/ruvds/blog/515008/
// sudo npm link

const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

const filename = (ext) => (isDev ? `index.${ext}` : `index.[hash].${ext}`);

const plugins = () => {
    const base = [
        new HTMLWebpackPlugin({
            template: './public/index.html',
            minify: {
                removeComments: isProd,
                collapseWhitespace: isProd,
            },
        }),
        new MiniCssExtractPlugin({
            filename: filename('css'),
        }),
        new CleanWebpackPlugin(),

        // это чуть позже гляну
        /*new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public/imgs'),
                    to: 'assets/imgs',
                },
            ],
        }),*/
    ];

    return base;
};

const babelOptions = (preset) => {
    const opts = {
        presets: ['@babel/preset-env'],
        plugins: [
            '@babel/plugin-transform-react-jsx',
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-proposal-class-properties',
        ],
    };

    if (preset && typeof preset === 'string') {
        opts.presets.push(preset);
    }

    if (preset && typeof preset === 'object') {
        opts.presets.push(...preset);
    }

    return opts;
};

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '../build'),
        filename: 'index.js',
        publicPath: isProd ? '_custom_web/material/build/' : '',
    },
    plugins: plugins(),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[local]__[hash:base64:5]',
                            },
                        },
                    },
                ],
                include: /\.module\.css$/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /\.module\.css$/,
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.(svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@lib': path.resolve(__dirname, './src/lib'),
            '@imgs': path.resolve(__dirname, './public/imgs'),
            '@app': path.resolve(__dirname, './src/components/app'),
        },
    },
};

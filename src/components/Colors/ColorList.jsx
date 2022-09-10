import React from 'react';
import ColorProvider from '@hooks/useColorProvider.jsx';

const Colors = () => {
    return (
        <ColorProvider>
            <div>
                <h1>title</h1>
                <div>
                    <FaTrash />
                </div>
                <div style={{ background: 'blue', height: '50px' }}></div>
                <div>
                    <StarRating />
                </div>
            </div>
        </ColorProvider>
    );
};

export default Colors;

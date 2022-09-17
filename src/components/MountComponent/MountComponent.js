import React, { useState } from 'react';
import Text from './Text.js'

const MountComponent = () => {
    const [text, setText] = useState('');

    if (text === '') {
        return (
            <div>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
        );
    }

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Text text={text} />
        </div>
    );
};

export default MountComponent;

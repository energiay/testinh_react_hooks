import React from 'react';
import { FaTrash } from 'react-icons/fa';
import StarRating from '@components/StarRating/StarRating.jsx';
import { useColors } from '@hooks/useColorProvider.jsx';

const Colors = () => {
    const { colors, removeColor } = useColors();

    return colors.map(color => {
        return (
            <div>
                <h1>{color.title}</h1>
                <span onClick={() => removeColor(color.id)}>
                    <FaTrash />
                </span>
                <div style={{ background: color.color, height: '50px' }}></div>
                <div>
                    <StarRating select={color.rating}/>
                </div>
            </div>
        )
    });
};

export default Colors;

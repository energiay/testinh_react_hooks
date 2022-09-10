import React, { useState } from 'react';
import Star from '../Star/Star.jsx';
import { IconContext } from 'react-icons';

const StarRating = ({ select = 0, total = 5, style = {} }) => {
    const createArray = (length) => [...Array(length)];
    const [selectedStars, setSelectedStar] = useState(select);

    return (
        <div style={{padding: "4px", ...style}}>
            {createArray(total).map((n, i) => {
                return (
                    <Star
                        key={i}
                        selected={selectedStars > i}
                        onSelect={() => setSelectedStar(i + 1)}
                    />
                );
            })}
            <div>
                {selectedStars} of {total} stars
            </div>
        </div>
    );
};

export default StarRating;

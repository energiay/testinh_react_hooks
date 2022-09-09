import React, { useState } from 'react';
import Star from '../Star/Star.jsx';

const StarRating = ({ total = 5, style = {} }) => {
    const createArray = (length) => [...Array(length)];
    const [selectedStars, setSelectedStar] = useState(0);

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

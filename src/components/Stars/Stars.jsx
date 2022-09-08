import React, { useState } from 'react';
import Star from '../Star/Star.jsx';

const Stars = ({ total = 5 }) => {
    const createArray = (length) => [...Array(length)];
    const [selectedStars, setSelectedStar] = useState(0);

    return (
        <div>
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

export default Stars;

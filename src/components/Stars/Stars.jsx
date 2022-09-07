import React from 'react';
import Star from '../Star/Star.jsx'

const Stars = () => {
    const createArray = length => [...Array(length)]
   console.log(createArray(5)) 
    return (
        <div>
            {createArray(5).map((n, i) => {
                return <Star ket={i}/>;
            })}
        </div>
    );
};

export default Stars;

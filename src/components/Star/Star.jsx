import React from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({selected = false}) => {
    return <FaStar color={selected ? "red" : "gray"} />
};

export default Star;

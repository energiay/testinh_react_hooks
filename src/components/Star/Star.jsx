import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Star = ({ selected = false, onSelect }) => {
    return (
        <IconContext.Provider value={{ size: '30px' }}>
            <FaStar color={selected ? 'red' : 'gray'} onClick={onSelect} />
        </IconContext.Provider>
    );
};

export default Star;

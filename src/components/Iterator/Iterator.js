import React from 'react';
import useIterator from './useIterator.js';

const data = [...Array(15)].map((elem, index) => {
    return 'element' + index;
});

const Iterator = () => {
    const [item, prev, next] = useIterator(data);
    console.log(item);
    return (
        <div style={{display: 'flex'}}>
            <div onClick={prev} style={{cursor: 'pointer'}}>Prev</div>
            <div>{item}</div>
            <div onClick={next} style={{cursor: 'pointer'}}>Next</div>
        </div>
    );
};

export default Iterator;

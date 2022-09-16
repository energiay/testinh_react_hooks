import React from 'react';
import useIterator from './useIterator.js';

const data = [...Array(15)].map((elem, index) => {
    return 'element' + index;
});

const Iterator = () => {
    const [item, prev, next] = useIterator(data);
    console.log(item);
    return (
        <div>
            <div onClick={prev}>Prev</div>
            <div onClick={next}>Next</div>
        </div>
    );
};

export default Iterator;

import React from 'react';
import useIterator from './useIterator.js';
import Classes from './Iterator.module.css'

const data = [...Array(15)].map((elem, index) => {
    return 'element' + index;
});

const Iterator = () => {
    const [item, prev, next] = useIterator(data);
    console.log(item);
    return (
        <div style={{display: 'flex'}}>
            <div onClick={prev} className={Classes.btn}>Prev</div>
            <div className={Classes.item}>{item}</div>
            <div onClick={next} className={Classes.btn}>Next</div>
        </div>
    );
};

export default Iterator;

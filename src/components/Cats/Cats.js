import React, {useState} from 'react';
import Cat from './Cat.js';

const Cats = () => {
    const [elem, setElem] = useState(['cats1', 'cat2', 'cat3'])
    const addCat = () => {
        const newCats = [...elem]; 
        newCats.push('newCat' + newCats.length)
        setElem(newCats) 
    }

    return (
        <div>
            {elem.map((catName, index) => {
                return <Cat key={index} name={catName} meu={() => console.log('meu')}/>;
            })}
            <button onClick={addCat}>Add cat</button>
        </div>
    );
};

export default Cats;

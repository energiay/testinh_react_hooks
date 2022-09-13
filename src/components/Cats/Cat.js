import React, { memo } from 'react';

const Cat = ({ name, meu = (f) => f }) => {
    console.log(name);

    return (
        <div>
            {name} <button onClick={meu}>meu</button>
        </div>
    );
};

export default memo(Cat);

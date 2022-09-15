import React from 'react';

const bigList = [...Array(5000)].map((elem, index) => {
    return {
        name: 'name ' + index,
        email: 'email ' + index,
        avatar: 'avatar ' + index,
    };
});

const VirtualRendering = () => {
    console.log(bigList);
    return (
        <div>
            {bigList.map((elem, index) => {
                return <div key={index}>{elem.name}</div>;
            })}
        </div>
    );
};

export default VirtualRendering;

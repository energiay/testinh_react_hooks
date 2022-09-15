import React from 'react';
import { FixedSizeList } from 'react-window'

const bigList = [...Array(5000)].map((elem, index) => {
    return {
        name: 'name ' + index,
        email: 'email ' + index,
        avatar: 'avatar ' + index,
    };
});

const VirtualRendering = () => {

    const renderRow = ({index, style}) => {
        return <div style={{...style}}>
            {bigList[index].name}
        </div>
    }

    return (
        <FixedSizeList
            //height={window.innerHeight}
            height={100}
            width={window.innerWidth - 20}
            itemCount={bigList.length}
            itemSize={19}
        >
            {renderRow}
        </FixedSizeList>
    );
};

export default VirtualRendering;

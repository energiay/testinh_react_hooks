import React from 'react'

const data = [...Array(15)].map((elem, index) => {
    return 'element' + index
})

const Iterator = () => {
    console.log(data)
    return (
        <div>Iterator</div>
    )
}

export default Iterator

import React from 'react'
import { FaStar, FaTrash } from 'react-icons/fa';
import StarRating from '@components/StarRating/StarRating.jsx'

const Colors = () => {
    return (
        <div>
            <h1>title</h1>
            <div><FaTrash /></div>
            <div style={{background: 'blue', height: '50px'}}></div>
            <div>
                <StarRating />
            </div>
        </div>
    )
}

export default Colors

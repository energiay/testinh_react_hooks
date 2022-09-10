import React from 'react'
import StarRating from '@components/StarRating/StarRating.jsx'
import Form from '@components/Form/Form.jsx'
import Colors from '@components/Colors/Colors.jsx'

const App = () => {
    return (
        <div>
            <StarRating />
            <hr />
            <Form />
            <hr />
            <Colors />
        </div>
    )
}

export default App

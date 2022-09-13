import React from 'react'
import StarRating from '@components/StarRating/StarRating.jsx'
import Form from '@components/Form/Form.jsx'
import Colors from '@components/Colors/Colors.jsx'
import ColorProvider from '@hooks/useColorProvider.jsx';
import TestReducer from '@components/TestReducer/TestReducer.js'
import Cats from '@components/Cats/Cats.js'

const App = () => {
    return (
        <div>
            <Cats />
            <hr />
            <TestReducer />
            <hr/>
            <StarRating />
            <hr />
            <Form />
            <hr />
            <ColorProvider>
                <Colors />
            </ColorProvider>
        </div>
    )
}

export default App

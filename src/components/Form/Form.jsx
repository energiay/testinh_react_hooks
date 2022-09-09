import React from 'react'
import useInput from '@hooks/useInput.js'


const Form = () => {
    const [titleProps, setTitle] = useInput("");
    const [colorProps, setColor] = useInput("#000");

    return (
        <div>
            <form>
                <input 
                    {...titleProps}
                    type="text"
                    placeholder="color title ..."
                    required
                />

                <input 
                    {...colorProps}
                    type="text"
                    placeholder="color..."
                    required
                />
            </form>
        </div>
    )
}

export default Form

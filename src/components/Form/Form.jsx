import React from 'react'

const Form = () => {
    return (
        <div>
            <form>
                <input 
                    type="text"
                    placeholder="color title ..."
                    required
                />

                <input 
                    type="text"
                    placeholder="color..."
                    required
                />
            </form>
        </div>
    )
}

export default Form

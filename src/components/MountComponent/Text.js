import React from 'react'
import useMountRef from './useMount.js'

const Text = ({text}) => {
    const mounted = useMountRef()
    console.log(mounted)
    return <span>{text}</span>
}

export default Text

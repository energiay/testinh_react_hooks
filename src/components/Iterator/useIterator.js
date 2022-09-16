import React, { useState, useCollback, useMemo } from 'react'

const useIterator = (items = [], initialIndex = 0) => {
    const [i, setIndex] = useState(initialIndex)

    const prev = () => {
        if (i === 0) {
            setIndex(items.length - 1)
            return
        }
        
        setIndex(i - 1)
    }

    const next = () => {
        if (i === items.length - 1) {
            setIndex(0)
            return
        }

        setIndex(i + 1)
    }

    return [
        items[i],
        prev,
        next
    ]
}

export default useIterator

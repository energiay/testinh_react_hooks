import React, { useState, createContext, useContext } from 'react';
import colorData from '@/data/colorData.json';

const ColorContext = createContext();
export const useColors = () =>  useContext(ColorContext);

export default function ColorProvider({ children }) {
    const [colors, setColors] = useState(colorData);

    return (
        <ColorContext.Provider value={{ colors }}>
            {children}
        </ColorContext.Provider>
    );
}


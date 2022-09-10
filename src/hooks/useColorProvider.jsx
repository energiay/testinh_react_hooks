import React, { useState, createContext, useContext } from 'react';
import colorData from '@/data/colorData.json';

const ColorContext = createContext();
export const useColors = () =>  useContext(ColorContext);

export default function ColorProvider({ children }) {
    const [colors, setColors] = useState(colorData);
    const removeColor = id => setColors(colors.filter(color => {
        console.log(color)
        return color.id !== id
    } 
    )) 
    
    return (
        <ColorContext.Provider value={{ colors, removeColor }}>
            {children}
        </ColorContext.Provider>
    );
}


import React, { useState } from 'react';

const GifContext = React.createContext('gifContext');

export function GifContextProvider ( { children } ) {
    const [gifs, setGifs] = useState([]);

    return (
        <GifContext.Provider value={ {gifs, setGifs} }>
            {children}
        </GifContext.Provider>
    )
}

export default GifContext;
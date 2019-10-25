import React, { createContext, useState, useEffect } from 'react';

const SizeContext = createContext([{}, () => {}]);

function SizeProvider (props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    const isClient = typeof window === 'object';
    useEffect(() => {
        if (!isClient) {
        return false;
        }
        
        function handleResize() {
            const width = isClient ? window.innerWidth : undefined;
            setWindowWidth(width);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <SizeContext.Provider value={[windowWidth, setWindowWidth]}>
            {props.children}
        </SizeContext.Provider>
    );
}

export { SizeProvider, SizeContext };
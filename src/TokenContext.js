import React, { createContext, useState, useEffect } from 'react';

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('localToken') || null);

    useEffect(() => {
        if (token) {
            localStorage.setItem('localToken', token);
        } else {
            localStorage.removeItem('localToken');
        }
    }, [token]);

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            {children}
        </TokenContext.Provider>
    );
};

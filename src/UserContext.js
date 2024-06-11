import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { TokenContext } from "./TokenContext";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [info, setInfo] = useState('');
    const {token} = useContext(TokenContext);


    const profileUrl = 'https://marine-dragonfly-e-learning-00af8488.koyeb.app/api/user';

    useEffect(() => {
        if (token) {
            async function getUserInfo() {
                try {
                    const response = await axios.get(profileUrl, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    setInfo(response.data);
                } catch (error) {
                    console.error('Error fetching user info:', error);
                }
            }
            getUserInfo();
        }
    }, [token]);

    return (
        <UserContext.Provider value={{ info, setInfo, token}}>
            {children}
        </UserContext.Provider>
    );
};

import React, {createContext, useContext, useEffect, useState} from 'react';
import {loginWithEmailAndPassword, logout, registerWithEmailAndPassword} from "../services/authApi.jsx";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const [currentUser, setCurrentUser] = useState({
        userId: null,
        accessToken: null,
        refreshToken: null,
    })
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const currentUser = localStorage.getItem('currentUser');
        if (token) {
            setToken(token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
        if (currentUser) {
            setCurrentUser(JSON.parse(currentUser));
        }
        setLoading(false);
    }, [token]);

    const loginUser = async (email, password) => {
        const response = await loginWithEmailAndPassword(email, password);
        if (response && response.value) {
            setToken(response.value.accessToken);
            localStorage.setItem('token', response.value.accessToken);

            localStorage.setItem('currentUser', JSON.stringify({
                userId: response.value.userId,
                accessToken: response.value.accessToken,
                refreshToken: response.value.refreshToken,
            }));
        }
        return response;
    }

    const registerUser = async (form_data) => {
        return await registerWithEmailAndPassword(form_data);
    }

    const logoutUser = async () => {
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
        setToken(null);
        setCurrentUser({
            userId: null,
            accessToken: null,
            refreshToken: null,
        });
        return await logout();
    }

    const value = {
        token,
        currentUser,
        loginUser,
        registerUser,
        logoutUser,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

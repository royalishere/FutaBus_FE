import React, {createContext, useContext, useEffect, useState} from 'react';
import {loginWithEmailAndPassword, logout, registerWithEmailAndPassword, getByUserId} from "../services/authApi.jsx";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const [currentUser, setCurrentUser] = useState({
        id: null,
        fullName: null,
        dateOfBirth: null,
        email: null,
        phoneNumber: null,
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
            localStorage.setItem('token', response.value.accessToken);
        }
        const user = await getByUserId(response.value.userId);
        if (user && user.value) {
            localStorage.setItem('currentUser', JSON.stringify(
                {
                    userId: user.value.id,
                    fullName: user.value.fullName,
                    dateOfBirth: user.value.dateOfBirth,
                    email: user.value.email,
                    phoneNumber: user.value.phoneNumber,
                }
            ));
        }
        setToken(response.value.accessToken ? response.value.accessToken : null);
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
            fullName: null,
            dateOfBirth: null,
            email: null,
            phoneNumber: null,
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

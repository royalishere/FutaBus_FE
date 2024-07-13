import axios from 'axios';
import {apiUrl} from '../utils/constants';

export const registerWithEmailAndPassword = async (form_data) => {
    const user = {
        fullName: form_data.fullName,
        phoneNumber: form_data.phoneNumber,
        email: form_data.email,
        password: form_data.password,
        passwordConfirmation: form_data.passwordConfirmation,
    }
    const response = await axios.post(`${apiUrl}/customers/signup`, user);
    return response.data;

}

export const loginWithEmailAndPassword = async (email, password) => {
    const response = await axios.post(`${apiUrl}/customers/signin`, {email, password});
    return response.data;
}

export const logout = async () => {
    const response = await axios.post(`${apiUrl}/customers/signout`);
    return response.data;
}

export const getByUserId = async (userId) => {
    const response = await axios.get(`${apiUrl}/customers/${userId}`);
    return response.data;
}
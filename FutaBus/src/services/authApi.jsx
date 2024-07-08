import axios from 'axios';
import {apiUrl} from '../utils/constants';

export const registerWithEmailAndPassword = async (form_data) => {
    const user = {
        fullName: "",
        phoneNumber: "",
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
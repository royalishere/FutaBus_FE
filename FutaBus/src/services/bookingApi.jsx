import axios from 'axios';
import {apiUrl} from '../utils/constants';

export const createBooking = async (data) => {
    console.log(data);
    const response = await axios.post(`${apiUrl}/bookings`, data);
    return response.data;
}

export const finishBooking = async (id, data) => {
    const response = await axios.post(`${apiUrl}/bookings/${id}/payment`, data);
    return response.data;
}

export const cancelBooking = async (id, data) => {
    const response = await axios.post(`${apiUrl}/bookings/${id}/cancel`, data);
    return response.data;
}
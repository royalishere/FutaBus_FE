import axios from 'axios';
import {apiUrl} from '../utils/constants';

export const getTripSeatsById = async (id) => {
    const response = await axios.get(`${apiUrl}/trips/${id}/tripseats`);
    return response.data;
}
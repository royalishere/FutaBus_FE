import axios from 'axios';
import {apiUrl} from '../utils/constants';

export const getRoutesById = async (id) => {
    const response = await axios.get(`${apiUrl}/routes/${id}`);
    return response.data;
}
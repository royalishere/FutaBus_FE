import axios from 'axios';
import {apiUrl} from '../utils/constants';

export const getAllOrigins = async () => {
    const response = await axios.get(`${apiUrl}/origin-codes?level=3`);
    return response.data;
}

export const getOriginsByLvName = async (level, name) => {
    const response = await axios.get(`${apiUrl}/origin-codes?level=${level}&name=${name}`);
    return response.data;
}
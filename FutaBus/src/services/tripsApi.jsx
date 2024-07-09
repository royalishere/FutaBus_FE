import axios from 'axios';
import {apiUrl} from '../utils/constants';

export const getAllTrips = async () => {
    const response = await axios.get(`${apiUrl}/trips`);
    return response.data;
}

export const getTripsByCodes = async (originCode, destCode, fromDate) => {
    const queryParams = [];
    if (originCode) {
        queryParams.push('originCode=' + encodeURIComponent(originCode));
    }

    if (destCode) {
        queryParams.push('destCode=' + encodeURIComponent(destCode));
    }

    if (fromDate) {
        queryParams.push('fromDate=' + encodeURIComponent(fromDate));
    }
    const query = queryParams.length ? queryParams.join('&') : '';
    const response = await axios.get(`${apiUrl}/trips?${query}`);
    return response.data;
}

export const getTripsById = async (id) => {
    const response = await axios.get(`${apiUrl}/trips/${id}`);
    return response.data;
}
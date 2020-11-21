import axios from 'axios';
import { PUBLIC_URL } from '../constants';

export const getResumeData = async () => {
    try {
        const result = await axios.get(`${PUBLIC_URL}/`);
        return result.data;
    } catch (err) {
        return Promise.reject(err);
    }
}
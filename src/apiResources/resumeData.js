import axios from 'axios';

export const getResumeData = async () => {
    try {
        console.log("hossein", process.env.PUBLIC_URL);
        const result = await axios.get(`${process.env.PUBLIC_URL}/api`);
        return result.data;
    } catch (err) {
        return Promise.reject(err);
    }
}
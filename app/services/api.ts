import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001',
});

export const fetchTest = async () => {
    try {
        const res = await API.get('/test');
        return res.data;
      } catch (error) {
        console.error('Error fetching test:', error);
        throw error;
      }
}

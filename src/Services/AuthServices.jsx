import axios from 'axios';

const API_URL = 'https://session-backend-0aoq.onrender.com';

const signup = async (email, password) => {
    const response = await axios.post(`${API_URL}/signup`, { email, password });
    return response.data;
};

const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
};

export { signup, login };

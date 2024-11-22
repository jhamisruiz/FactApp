import axios from './axiosInstance';

export const authService = {
    login: async (user_name: string, password: string) => {
        const response = await axios.post('/login', { user_name, password });
        return response.data; // Supongamos que devuelve un token y datos del usuario.
    },
};

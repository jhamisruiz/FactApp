import axios from './axiosInstance';

export const userService = {
    List: async () => {
        const response = await axios.get('/usuarios');
        return response.data;
    },
    Create: async (user: { name: string; email: string }) => {
        const response = await axios.post('/usuarios', user);
        return response.data;
    },
    Update: async (id: number, user: any) => {
        const response = await axios.put(`/usuarios/${id}`, user);
        return response.data;
    },
    GetById: async (id: number) => {
        const response = await axios.get(`/usuarios/${id}`);
        return response.data;
    },
    Delete: async (id: number) => {
        const response = await axios.delete(`/usuarios/${id}`);
        return response.data;
    },
};

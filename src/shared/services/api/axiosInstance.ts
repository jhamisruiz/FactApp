import axios from 'axios';
import { pathBase } from '../../consts';

// Configuración base para Axios
const axiosInstance = axios.create({
    baseURL: pathBase, // Cambia por la URL base de tu API
    timeout: 10000, // Tiempo límite de espera para las solicitudes (en ms)
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor para adjuntar el token de autenticación
/* axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Cambia según tu método de almacenamiento
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
); */

// Interceptor para manejar respuestas y errores
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            // Manejar errores de autenticación
            console.error('No autorizado, redirigiendo al login...');
            // Redirigir al login o realizar otras acciones necesarias
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;

/* import { useDispatch } from 'react-redux';
import { setAuth } from '../store/slices/authSlice'; */
import { authService } from '../services/api/authService';

export const useAuth = () => {
    //const dispatch = useDispatch();

    const login = async (user_name: string, password: string) => {
         await authService.login(user_name, password);
        //dispatch(setAuth({ user: data.user, token: data.token }));
    };

    return { login };
};

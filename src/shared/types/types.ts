export type RootStackParamList = {
    Login: undefined; // No requiere parámetros
    Home: undefined;  // No requiere parámetros
};

export type UserStackParamList = {
    User: { id?: number, viewOnly?: boolean, createOnly?: true, updateOnly?: true }; // No requiere parámetros
    Users: undefined;  // No requiere parámetros
};

export interface User {
    id:         number;
    name:       string;
    last_name:  string;
    user_name:  string;
    habilitado: boolean;
    email:      string;
    telefono:   string;
}

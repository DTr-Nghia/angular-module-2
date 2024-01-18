export interface User {
    id: number;
    username: string;
    password: string;
    email: string;
    role: string;
}
export interface AddUser {
    username: string;
    password: string;
    email: string;
}
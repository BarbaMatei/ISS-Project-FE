export interface User {
    id?:number,
    first_name: string,
    last_name: string,
    username: string,
    password: string,
    access_token?: string;
    refresh_token?: string;
    role?: string;
}

export interface UserDetails {
    id: number,
    name: string,
    email: string,
    phoneNo: string,
    position: string
}
export interface UserUpdate {
    id: number,
    name: string,
    phoneNo: string,
    position: string
}
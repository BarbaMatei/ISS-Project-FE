export interface loginUser {
    id?: number;
    first_name?: string,
    last_name?: string,
    username: string,
    password: string,
    access_token?: string;
    refresh_token?: string;
}
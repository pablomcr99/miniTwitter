export interface LoginResponse {
    token: string;
    username: string;
    email: string;
    photourl:string;
    created:Date;
    active:boolean;
}
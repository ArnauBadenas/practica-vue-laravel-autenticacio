export interface LoginPayload{
    email:string,
    password:string
}
export interface RegisterPayload {
    "name": string,
    "email": string,
    "password": string,
    "password_confirmation": string
}
export interface User {
    "id": string,
    "name": string,
    "email": string,
    "email_verified_at": string | null,
    "two_factor_secret": string | null,
    "two_factor_recovery_codes": string | null,
    "two_factor_confirmed_at": string | null,
    "created_at": string,
    "updated_at": string
}
export interface Link{
    id:string,
    created_at:string,
    updated_at:string,
    
}
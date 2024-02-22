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
export interface LinkPayload {
    "email":string,
    "short_link":string
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
    short_link:string,
    full_link:string,
    user_id:string,
    views:string
}
export interface ErrorResponse {
    message:string;
    errors: Record<string, string[]>;
}
export interface PaginateResponse<T>{
    current_page: number,
    data: T[];
    first_page_url:string | null,
    from: number,
    last_page:number,
    last_page_url: string | null,
    links: {
        url:string | null,
        label: string,
        active:boolean,
    }[],
    next_page_url: string | null,
    path:string,
    per_page:number,
    prev_page_url:string | null,
    to:number,
    total:number
}
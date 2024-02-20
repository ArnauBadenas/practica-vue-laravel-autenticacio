import { Ref } from "@vue/runtime-dom";
import axios from "axios";
import type { User,LoginPayload,RegisterPayload } from "@/types";
export const useAuth = () => {
    //desar l'usuari connectat
    async function login(payload: LoginPayload) {
        await axios.post("/api/login", payload)
        useRouter().push("/me")
    }
    async function register(payload: RegisterPayload) {
        await axios.post("/api/register", payload)
        useRouter().push("/me")
    }
    async function logout() {
        //Eliminar dades d'usuari al fer logout
        user.value = null
        await axios.post("/api/logout")
    }
    const user = ref<User | null>(null)
    async function getUser(): Promise<User | null> {
        if(user.value != null) return user.value
        try {            
            const res = await axios.get("/api/user")
            const user = res.data;
            return {
                ...user,
                created_at: new Date(user.created_at),
                updated_at: new Date(user.updated_at),
                email_verified_at: user.email_verified_at
                    ? new Date(user.email_verified_at)
                    : null,
                two_factor_confirmed_at: user.two_factor_confirmed_at
                    ? new Date(user.two_factor_confirmed_at)
                    : null,
            }
        }
        catch(err){
            return null
        }
    }
    async function initUser(): Promise<User | null>{
        return await getUser()
    }
    return {
        login,
        register,
        logout,
        initUser,
        user
    }
}
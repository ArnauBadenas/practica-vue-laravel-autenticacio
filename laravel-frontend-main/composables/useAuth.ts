import axios from "axios";

interface LoginPayload{
    email:string;
    password:string;
}
interface RegisterPayload{
    "name":string,
    "email":string,
    "password":string,
    "password_confirmation":string
  }
export const useAuth=()=> {
    //desar l'usuari connectat
    async function login(payload:LoginPayload){
        await axios.post("/api/login",payload)
        useRouter().push("/me")
    }
    async function register(payload:RegisterPayload){
        await axios.post("/api/register",payload)
        useRouter().push("/me")
    }
    async function logout(){
        await axios.post("/api/logout")
    }
    return {
        login,
        register,
        logout
    }
}
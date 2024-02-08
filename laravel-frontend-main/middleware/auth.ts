import axios, { AxiosError } from "axios"

export default defineNuxtRouteMiddleware(async (to, from) => {

    const {user, initUser} = useAuth()
    if(user.value == null){
        user.value = await initUser()
    }
    //Si segueix sent null envia a login
    if(user.value == null){
        return navigateTo("/login")
    }
    
    // try{
    //     await axios.get("/api/user")
    // }    
    // catch(error){
    //     if(error instanceof AxiosError && error.response?.status===401){
            
    //     }
    // }
})

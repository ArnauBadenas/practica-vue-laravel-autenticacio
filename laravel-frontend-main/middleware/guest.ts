import axios, { AxiosError } from "axios"

export default defineNuxtRouteMiddleware(async (to, from) => {

    const {user, initUser} = useAuth()
    user.value = await initUser()
    if(user.value != null){
        return navigateTo("/me")
    }
    
})

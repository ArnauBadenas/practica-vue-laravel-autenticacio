<template>
  <div>Logging Out...</div>
</template>

<script setup>
import axios from 'axios';

async function logout(){
  try{
    const logout = axios.post("/api/logout")
    return logout
  }catch(e){
    console.log(e)
  }
}
logout()

const router = useRouter()
router.replace("/login")
</script>

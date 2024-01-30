<template>
  <p><strong>User Name:</strong> {{ user.name }}</p>
  <p><strong>User Email:</strong> {{ user.email }}</p>
</template>

<script lang="ts" setup>
import axios from 'axios';
interface User{
  id:number,
  name:string,
  email:string,
 
}
async function getUser() {
  try{
    const user = await axios.get("/api/user")
    console.log(user.data)
    return user.data
  }catch(e){
    console.log(e)
  }
}
const user:User = await getUser()
  
</script>

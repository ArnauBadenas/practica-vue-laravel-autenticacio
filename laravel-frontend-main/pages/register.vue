<script setup lang="ts">
import axios from "axios";
import { Ref } from "nuxt/dist/app/compat/vue-demi";

definePageMeta({
  layout: "centered",
  middleware: ["guest"]
});
interface RegisterPayload{
  "name":string,
  "email":string,
  "password":string,
  "password_confirmation":string
}
const payload:Ref<RegisterPayload> = ref({
  name:"",
  email:"",
  password:"",
  password_confirmation:""
})

import {useAuth} from "../composables/useAuth";
const {register}=useAuth();
// async function register(payload:RegisterPayload) {
//   try{
//     const res=await axios.post("/api/register",payload)
//     console.log(res)
//     //afegit meu
//     const router = useRouter()
//     router.replace("/me")
//   }catch(e){
//     console.log(e)
//   }
  
//  }

</script>
<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="register(payload)">
      <label>
        <div>Name</div>
        <input type="text" v-model="payload.name"/>
      </label>

      <label>
        <div>Email</div>
        <input type="email" v-model="payload.email"/>
      </label>

      <label>
        <div>Password</div>
        <input type="password" v-model="payload.password"/>
      </label>

      <label>
        <div>Confirm Password</div>
        <input type="password" v-model="payload.password_confirmation"/>
      </label>

      <button class="btn">Register</button>
    </form>

    <p>
      Already have an account?
      <NuxtLink class="underline text-lime-600" to="/login">Login</NuxtLink>
    </p>
  </div>
</template>

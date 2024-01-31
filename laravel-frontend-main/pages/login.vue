<script setup lang="ts">
import axios from 'axios';
import { Ref } from 'nuxt/dist/app/compat/vue-demi';

definePageMeta({
  layout: "centered",
  middleware: ["guest"]
});
interface LoginPayload{
  "email":string,
  "password":string,
}
const user:Ref<LoginPayload> = ref({
  email:"",
  password:""
})

import {useAuth} from "../composables/useAuth";
const {login}=useAuth();
// async function login(user:LoginPayload){
//   try{
//     const login = await axios.post("/api/login", user)
//     console.log(user)
//     const router = useRouter()
//     router.replace("/me")
//   }catch(e){
//     console.log(e)
//   }
// }

</script>
<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login(user)">
      <label>
        <div>Email</div>
        <input type="text" v-model="user.email"/>
      </label>

      <label>
        <div>Password</div>
        <input type="password" v-model="user.password"/>
      </label>
      <button class="btn">Login</button>
    </form>

    <p>
      Don't have an account?
      <NuxtLink class="underline text-lime-600" to="/register"
        >Register now!</NuxtLink
      >
    </p>
  </div>
</template>

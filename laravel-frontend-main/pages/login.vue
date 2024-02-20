<script setup lang="ts">
import axios, { AxiosError } from 'axios';
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

// Mostrar validació d'errors al front
const errors:Ref<{email:string[],password:string[]}>=ref({
  email:[],
  password:[]
})

async function handleLogin(){
  try{
    errors.value.email = []
    errors.value.password = []
    await login(user.value)
  }catch(error){
    if(error instanceof AxiosError && error.response?.status===422){
      errors.value.email.push(...error.response.data.errors.email)
      errors.value.password.push(...error.response.data.errors.password)
      console.log(errors.value)
    }   
  }
}
</script>
<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin()">
      <label>
        <div>Email</div>
        <input type="text" v-model="user.email"/>
        <div class="emailErrors">{{ errors.email }}</div>
      </label>

      <label>
        <div>Password</div>
        <input type="password" v-model="user.password"/>
        <div class="passwordErrors">{{ errors.password }}</div>
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

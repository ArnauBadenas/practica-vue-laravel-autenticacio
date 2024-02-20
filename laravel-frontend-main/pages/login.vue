<script setup lang="ts">
import axios, { AxiosError } from 'axios';
import { Ref } from 'nuxt/dist/app/compat/vue-demi';
import { LoginPayload } from '@/types';
import type {FormKitNode} from "@formkit/core"

definePageMeta({
  layout: "centered",
  middleware: ["guest"]
});
const user:Ref<LoginPayload> = ref({
  email:"",
  password:""
})

import {useAuth} from "../composables/useAuth";
const {login}=useAuth();

// Mostrar validació d'errors al front
async function handleLogin(payload:LoginPayload,node?:FormKitNode){
  try{
    await login(payload)
  }catch(error){
    handleInvalidForm(error,node)
  }
}
</script>
<template>
  <div class="login">
    <h1>Login</h1>
    <FormKit type="form" submit-label="Login" @submit="handleLogin">
      <FormKit label="Email" name="email" type="email"/>
      <FormKit label="Password" name="password" type="password"/>
    </FormKit>

    <p>
      Don't have an account?
      <NuxtLink class="underline text-lime-600" to="/register"
        >Register now!</NuxtLink
      >
    </p>
  </div>
</template>

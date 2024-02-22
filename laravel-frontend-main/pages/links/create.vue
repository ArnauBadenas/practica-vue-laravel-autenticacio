<template>
  <h1>Create New Link</h1>
  <GoBack>or go back to links</GoBack>
  <FormKit type="form" submit-label="Create Link" @submit="createLink">
    <FormKit label="Full Link" type="url" name="full_link"/>
  </FormKit>
</template>
<script setup lang="ts">
import type {FormKitNode} from "@formkit/core"
import axios from "axios";
import { nanoid } from 'nanoid'
import { LoginPayload } from "~~/types";
definePageMeta({
  middleware:["auth"]
})

async function createLink(payload:LoginPayload, node?:FormKitNode){
  try{
    await axios.post("/api/links",{
      ...payload,
      short_link: nanoid(8),
    })
  }catch(error){
    handleInvalidForm(error,node)
  }
}
</script>

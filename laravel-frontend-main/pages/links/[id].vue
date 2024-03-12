<template>
  <h1>Update Link</h1>
  <GoBack>or go back to links</GoBack>

  <FormKit type="form" submit-label="Update Link" @submit="handleUpdate">
    <FormKit type="text" name="short_link" label="Short Link" v-model="link.short_link"/>
    <FormKit type="url" name="full_link" label="Full Link" v-model="link.full_link"/>
  </FormKit>
  
</template>

<script setup lang="ts">
import { Link } from '~~/types'
import type {FormKitNode} from "@formkit/core"


definePageMeta({
  middleware:["auth"]
})


const route = useRoute()
const linkId = route.params.id


//Utilitzar find
const{link,find:getLink,update}=useLinks()
await getLink(linkId as unknown as number)


async function handleUpdate(payload:Partial<Link>,node?:FormKitNode){
  try{
    await update(Number(useRoute().params.id),payload)
    useRouter().push("/links")
  }catch(error){
    handleInvalidForm(error,node)
  }
}


</script>

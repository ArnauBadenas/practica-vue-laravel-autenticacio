<template>
  <p><strong>User Name:</strong> {{ user?.name }}</p>
  <p><strong>User Email:</strong> {{ user?.email }}</p>
</template>

<script lang="ts" setup>
import axios from 'axios';
definePageMeta({
  middleware:["auth"]
})
const {user, initUser} = useAuth()
user.value = await initUser() 
</script>

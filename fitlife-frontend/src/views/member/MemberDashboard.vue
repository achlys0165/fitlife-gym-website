<script setup>
import { onMounted, ref } from "vue"
import api from "@/services/api"
import { useAuthStore } from "@/store/auth"

const home = ref(null)
const auth = useAuthStore()

onMounted(async () => {
  const res = await api.get("/member/home")
  home.value = res.data
})
</script>

<template>
  <div>
    <h1>Welcome</h1>

    <div v-if="home">
      <p>Status: {{ home.membership_status }}</p>
      <p>Remaining Sessions: {{ home.remaining_sessions }}</p>
    </div>
  </div>
</template>

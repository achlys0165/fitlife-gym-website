<script setup>
import { onMounted, ref } from "vue"
import api from "@/services/api"

const overview = ref(null)
const error = ref(null)

onMounted(async () => {
  try {
    const res = await api.get("/admin/overview")
    overview.value = res.data
  } catch (err) {
    error.value = err.message
  }
})
</script>

<template>
  <div class="dashboard">
    <h1>Admin Dashboard</h1>

    <div v-if="error">{{ error }}</div>

    <div v-if="overview" class="metrics">
      <div>Active Members: {{ overview.active_members }}</div>
      <div>Revenue: ${{ overview.monthly_revenue_usd }}</div>
      <div>Daily Logs: {{ overview.daily_logs }}</div>
    </div>
  </div>
</template>

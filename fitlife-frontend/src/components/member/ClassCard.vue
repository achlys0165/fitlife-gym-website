<script setup>
import api from "@/services/api"
import { useAuthStore } from "@/store/auth"

const props = defineProps(["classData"])
const auth = useAuthStore()

const bookClass = async () => {
  try {
    await api.post("/bookings", {
      member_id: auth.user_id,
      class_id: props.classData.id
    })
    alert("Booked successfully")
  } catch (err) {
    alert(err.message)
  }
}
</script>

<template>
  <div class="class-card">
    <h3>{{ classData.title }}</h3>
    <p>{{ classData.instructor }}</p>
    <button @click="bookClass">Book</button>
  </div>
</template>

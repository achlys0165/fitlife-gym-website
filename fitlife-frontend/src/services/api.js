import axios from "axios"
import { useAuthStore } from "@/store/auth"

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json"
  }
})

// Inject JWT automatically
api.interceptors.request.use((config) => {
  const auth = useAuthStore()
  if (auth.token) {
    config.headers.Authorization = `Bearer ${auth.token}`
  }
  return config
})

// Global error handler
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.data?.error) {
      return Promise.reject(error.response.data.error)
    }
    return Promise.reject({
      code: "NETWORK_ERROR",
      message: "Unable to connect to server."
    })
  }
)

export default api

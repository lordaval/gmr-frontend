import axios from "axios"

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333/",
  withCredentials: true,
})

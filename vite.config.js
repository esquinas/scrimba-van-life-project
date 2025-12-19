import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  base: "scrimba-van-life-project",
  plugins: [
    react()
  ]
})

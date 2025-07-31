import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve("./src"),
      "@assets": resolve("./src/assets"),
      "@components": resolve("./src/components"),
      // Добавляй другие алиасы по аналогии
    },
  },
})

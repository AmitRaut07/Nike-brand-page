import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Nike-brand-page/', 
  build: {
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif']
  }
})

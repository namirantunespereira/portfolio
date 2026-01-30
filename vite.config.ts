import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages (Project Pages) usa subpasta (/portfolio/). Para isso, use:
//   npm run build:gh
// Isso injeta o base correto sem travar o deploy no Vercel.
export default defineConfig({
  plugins: [vue()],
})

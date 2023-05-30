import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  build: {
    rollupOptions: {
      input: 'packages/ehop/index.ts',
      output: {
        dir: 'dist/ehop',
      },
    },
  },
  plugins: [
    vue(),
    vueJsx(),
  ],
})

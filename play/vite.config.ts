import { URL, fileURLToPath } from 'node:url'

import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {} from '@ehop/components'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: [
      {
        find: /^element-plus(\/(es|lib))?$/,
        replacement: path.resolve(epRoot, 'index.ts'),
      },
      {
        find: /^element-plus\/(es|lib)\/(.*)$/,
        replacement: `${pkgRoot}/$2`,
      },
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
})

import { URL, fileURLToPath } from 'node:url'

import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { ehRoot, pkgRoot } from '@ehop/build-utils'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), Components({
    include: path.resolve(__dirname, '**'),
    resolvers: [
      {
        type: 'component',
        resolve: (componentName) => {
          // where `componentName` is always CapitalCase
          if (componentName.startsWith('Eh'))
            return { name: componentName.slice(3), from: 'vant' }
        },
      },
    ],
    dts: false,
  })],
  resolve: {
    alias: [
      {
        find: /^ehop(\/(es|lib))?$/,
        replacement: path.resolve(ehRoot, 'index.ts'),
      },
      {
        find: /^ehop\/(es|lib)\/(.*)$/,
        replacement: `${pkgRoot}/$2`,
      },
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
})

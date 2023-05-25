// import { URL, fileURLToPath } from 'node:url'

// import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// import { ehRoot, pkgRoot } from '@ehop/build-utils'
// import Components from 'unplugin-vue-components/vite'

// function kebabCase(key: string) {
//   const result = key.replace(/([A-Z])/g, ' $1').trim()
//   return result.split(' ').join('-').toLowerCase()
// }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(),
    // Components({
    // include: path.resolve(__dirname, '**'),
    // resolvers: [
    //   [
    //     {
    //       type: 'component',
    //       resolve: (name) => {
    //         if (!name.match(/^Eh[A-Z]/))
    //           return

    //         if (name.match(/^EhIcon.+/)) {
    //           return {
    //             name: name.replace(/^EhIcon/, ''),
    //             from: '@ehop/icons-vue',
    //           }
    //         }

    //         const dirName = kebabCase(name.slice(2))// EhTableColumn -> table-column
    //         const esComponentsFolder = 'ehop/es/components'

    //         return {
    //           name,
    //           from: 'ehop/es',
    //           // sideEffects: [`${esComponentsFolder}/base/style/index`, `${esComponentsFolder}/${dirName}/style/index`],
    //         }
    //       },
    //     },
    //   ],
    // ],
  //   dts: false,
  // })
  ],
  // resolve: {
  //   alias: [
  //     {
  //       find: /^ehop(\/(es|lib))?$/,
  //       replacement: path.resolve(ehRoot, 'index.ts'),
  //     },
  //     {
  //       find: /^ehop\/(es|lib)\/(.*)$/,
  //       replacement: `${pkgRoot}/$2`,
  //     },
  //     {
  //       find: '@',
  //       replacement: fileURLToPath(new URL('./src', import.meta.url)),
  //     },
  //   ],
  // },
})

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import esbuild from 'rollup-plugin-esbuild'
import scss from 'rollup-plugin-scss'
import less from 'rollup-plugin-less'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default [
  {
    input: 'packages/ehop/index.ts',
    output: {
      dir: 'dist/ehop',
      format: 'esm',
      exports: undefined,
      preserveModules: true,
      preserveModulesRoot: 'packages/ehop',
      sourcemap: true,
      entryFileNames: '[name].mjs',
    },
    plugins: [
      less(),
      scss(),
      vue(),
      vueJsx(),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts'],
      }),
      commonjs(),
      esbuild(),
    ],
  },
]

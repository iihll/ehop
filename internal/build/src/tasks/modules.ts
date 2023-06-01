import { rollup } from 'rollup'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import VueMacros from 'unplugin-vue-macros/rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import glob from 'fast-glob'
import { ehRoot, excludeFiles, pkgRoot } from '@ehop/build-utils'
import type { OutputOptions } from 'rollup'
import { generateExternal, writeBundles } from '../utils'
import { EhopAlias } from '../plugins/ehop-alias'
import { buildConfigEntries, target } from '../build-info'

export async function buildModules() {
  const input = excludeFiles(
    await glob('**/*.{js,ts,vue}', {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true,
    }),
  )
  const bundle = await rollup({
    input,
    plugins: [
      EhopAlias(),
      // VueMacros({
      //   setupComponent: false,
      //   setupSFC: false,
      //   plugins: {
      //     vue: vue({
      //       isProduction: false,
      //     }),
      //     vueJsx: vueJsx(),
      //   },
      // }),
      vue({
        isProduction: false,
      }),
      vueJsx(),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts'],
      }),
      commonjs(),
      esbuild({
        sourceMap: true,
        target,
        loaders: {
          '.vue': 'ts',
        },
      }),
    ],
    external: await generateExternal({ full: false }),
    treeshake: false,
  })

  await writeBundles(
    bundle,
    buildConfigEntries.map(([module, config]): OutputOptions => {
      return {
        format: config.format,
        dir: config.output.path,
        exports: module === 'cjs' ? 'named' : undefined,
        preserveModules: true,
        preserveModulesRoot: ehRoot,
        sourcemap: true,
        entryFileNames: `[name].${config.ext}`,
      }
    }),
  )
}

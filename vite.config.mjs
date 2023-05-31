import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import manifest from './packages/ehop/package.json'

const pkgRoot = 'packages'
const ehRoot = resolve(pkgRoot, 'ehop')
const ehPackage = resolve(ehRoot, 'package.json')

const PKG_NAME = 'ehop'
const buildConfig = {
  esm: {
    module: 'ESNext',
    format: 'esm',
    ext: 'mjs',
    output: {
      name: 'es',
      path: resolve('./dist/ehop', 'es'),
    },
    bundle: {
      path: `${PKG_NAME}/es`,
    },
  },
  cjs: {
    module: 'CommonJS',
    format: 'cjs',
    ext: 'js',
    output: {
      name: 'lib',
      path: resolve('./dist/ehop', 'lib'),
    },
    bundle: {
      path: `${PKG_NAME}/lib`,
    },
  },
}

const buildConfigEntries = Object.entries(buildConfig)
const output = buildConfigEntries.map(([module, config]) => {
  return {
    format: config.format,
    dir: config.output.path,
    exports: module === 'cjs' ? 'named' : undefined,
    preserveModules: true,
    preserveModulesRoot: 'packages/ehop',
    sourcemap: true,
    entryFileNames: `[name].${config.ext}`,
  }
})

async function generateExternal(options) {
  const { dependencies, peerDependencies } = await getPackageDependencies(ehPackage)
  const packages = [...peerDependencies]
  packages.push('@vue', ...dependencies)

  return [...new Set(packages)]
}

async function getPackageManifest(pkgPath) {
  return import(pkgPath, {
    assert: {
      type: 'json',
    },
  })
}

async function getPackageDependencies(pkgPath) {
  // const manifest = await getPackageManifest(pkgPath)
  const { dependencies = {}, peerDependencies = {} } = manifest

  return {
    dependencies: Object.keys(dependencies),
    peerDependencies: Object.keys(peerDependencies),
  }
}

const external = await generateExternal({ full: true })

export default defineConfig({
  build: {
    rollupOptions: {
      input: 'packages/ehop/index.ts',
      output: [
        {
          format: 'esm',
          dir: resolve('./dist/ehop', 'es'),
          preserveModules: true,
          preserveModulesRoot: ehRoot,
          entryFileNames: '[name].mjs',
        },
        {
          format: 'cjs',
          exports: 'named',
          dir: resolve('./dist/ehop', 'lib'),
          preserveModules: true,
          preserveModulesRoot: ehRoot,
          entryFileNames: '[name].js',
        },
      ],
      preserveEntrySignatures: 'strict',
      external,
    },
  },
  plugins: [
    vue(),
    vueJsx(),
  ],
})

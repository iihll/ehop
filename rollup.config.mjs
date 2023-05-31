import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import esbuild from 'rollup-plugin-esbuild'
import scss from 'rollup-plugin-scss'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import glob from 'fast-glob'

const pkgRoot = resolve(__dirname, 'packages')
const ehRoot = resolve(pkgRoot, 'ehop')
const ehPackage = resolve(ehRoot, 'package.json')

function excludeFiles(files) {
  const excludes = ['node_modules', 'test', 'mock', 'gulpfile', 'dist', 'build']
  return files.filter(
    path => !excludes.some(exclude => path.includes(exclude)),
  )
}
const files = await glob('**/*.{js,ts,vue}', {
  cwd: pkgRoot,
  absolute: true,
  onlyFiles: true,
})

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
  const manifest = await getPackageManifest(pkgPath)
  const { dependencies = {}, peerDependencies = {} } = manifest.default

  return {
    dependencies: Object.keys(dependencies),
    peerDependencies: Object.keys(peerDependencies),
  }
}

const external = await generateExternal({ full: true })

const config = [
  {
    input: 'packages/ehop',
    output,
    plugins: [
      scss(),
      vue(),
      vueJsx(),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts'],
      }),
      commonjs(),
      esbuild({
        target: 'es2018',
        sourceMap: true,
        loaders: {
          '.vue': 'ts',
        },
      }),
    ],
    external,
  },
]

console.log('config', config)

export default config

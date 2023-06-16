import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import esbuild from 'rollup-plugin-esbuild'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

// import dts from 'rollup-plugin-dts'
import glob from 'fast-glob'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const pkgRoot = resolve(__dirname, 'packages')
const ehRoot = resolve(pkgRoot, 'ehop')
const ehPackage = resolve(ehRoot, 'package.json')
const projRoot = resolve(__dirname)
const buildOutput = resolve(projRoot, 'dist')
const ehOutput = resolve(buildOutput, 'ehop')

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

const input = excludeFiles(
  await glob('**/*.{js,ts,vue}', {
    cwd: pkgRoot,
    absolute: true,
    onlyFiles: true,
  }),
)
console.log('input', input)

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

function formatBundleFilename(
  name,
  minify,
  ext,
) {
  return `${name}${minify ? '.min' : ''}.${ext}`
}
const minify = true
const PKG_BRAND_NAME = 'Ehop'
const PKG_CAMELCASE_NAME = 'Ehop'
const version = '0.0.0-dev.1'
const banner = `/*! ${PKG_BRAND_NAME} v${version} */\n`
// output.push({
//   format: 'umd',
//   file: resolve(
//     ehOutput,
//     'dist',
//     formatBundleFilename('index.full', minify, 'js'),
//   ),
//   exports: 'named',
//   name: PKG_CAMELCASE_NAME,
//   globals: {
//     vue: 'Vue',
//   },
//   sourcemap: minify,
//   banner,
// },
// {
//   format: 'esm',
//   file: resolve(
//     ehOutput,
//     'dist',
//     formatBundleFilename('index.full', minify, 'mjs'),
//   ),
//   sourcemap: minify,
//   banner,
// })

async function generateExternal(options) {
  const { dependencies, peerDependencies } = await getPackageDependencies(ehPackage)
  const packages = [...peerDependencies]
  packages.push(...dependencies)

  return [...new Set(packages)]
}

async function getPackageManifest(pkgPath) {
  const url = pathToFileURL(pkgPath)
  return import(url, {
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

function EhopThemeChalkAlias() {
  const PKG_PREFIX = '@ehop'
  const themeChalk = 'theme-chalk'
  const sourceThemeChalk = `${PKG_PREFIX}/${themeChalk}`
  const bundleThemeChalk = `${PKG_PREFIX}/${themeChalk}`

  return {
    name: 'ehop-theme-chalk-alias-plugin',
    resolveId(id) {
      if (!id.startsWith(sourceThemeChalk))
        return
      return {
        id: id.replaceAll(sourceThemeChalk, bundleThemeChalk),
        external: 'absolute',
      }
    },
  }
}

function externalDayjs() {
  const PKG_PREFIX = 'dayjs'

  return {
    name: 'external-dayjs',
    resolveId(id) {
      if (!id.startsWith(PKG_PREFIX))
        return
      return {
        id,
        external: 'absolute',
      }
    },
  }
}

console.log('external', external)

const config = [
  {
    input,
    output,
    plugins: [
      externalDayjs(),
      EhopThemeChalkAlias(),
      // scss(),
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
      // dts(),
    ],
    external,
    treeshake: false,
  },
]

export default config

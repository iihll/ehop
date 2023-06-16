import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import esbuild, { minify as minifyPlugin } from 'rollup-plugin-esbuild'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const pkgRoot = resolve(__dirname, 'packages')
const ehRoot = resolve(pkgRoot, 'ehop')
const ehPackage = resolve(ehRoot, 'package.json')
const projRoot = resolve(__dirname)
const buildOutput = resolve(projRoot, 'dist')
const ehOutput = resolve(buildOutput, 'ehop')

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

async function generateExternal(options) {
  const { dependencies, peerDependencies } = await getPackageDependencies(ehPackage)
  const packages = [...peerDependencies]
  packages.push('@vue', ...dependencies)

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

const target = 'es2018'
const config = [
  {
    input: resolve(ehRoot, 'index.ts'),
    output: [
      {
        format: 'umd',
        file: resolve(
          ehOutput,
          'dist',
          formatBundleFilename('index.full', minify, 'js'),
        ),
        exports: 'named',
        name: PKG_CAMELCASE_NAME,
        globals: {
          vue: 'Vue',
        },
        sourcemap: minify,
        banner,
      },
      {
        format: 'esm',
        file: resolve(
          ehOutput,
          'dist',
          formatBundleFilename('index.full', minify, 'mjs'),
        ),
        sourcemap: minify,
        banner,
      },
    ],
    plugins: [
      EhopThemeChalkAlias(),
      // scss(),
      vue({
        isProduction: true,
      }),
      vueJsx(),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts'],
      }),
      commonjs(),
      esbuild({
        target,
        exclude: [],
        sourceMap: minify,
        loaders: {
          '.vue': 'ts',
        },
        define: {
          'process.env.NODE_ENV': JSON.stringify('production'),
        },
        treeShaking: true,
        legalComments: 'eof',
      }),
      minifyPlugin({
        target,
        sourceMap: true,
      }),
    ],
    external,
    treeshake: true,
  },
]

export default config

import { compare } from 'compare-versions'
import {
  getPackageInfo,
  isPackageExists,
} from 'local-pkg'

export function kebabCase(key) {
  const result = key.replace(/([A-Z])/g, ' $1').trim()
  return result.split(' ').join('-').toLowerCase()
}
export async function getPkgVersion(pkgName, defaultVersion) {
  try {
    const isExist = isPackageExists(pkgName)
    if (isExist) {
      const pkg = await getPackageInfo(pkgName)
      return pkg?.version ?? defaultVersion
    }
    else {
      return defaultVersion
    }
  }
  catch (err) {
    console.error(err)
    return defaultVersion
  }
}

export interface EhopResolverOptions {
  /**
   * import style css or sass with components
   *
   * @default 'css'
   */
  importStyle?: boolean | 'css' | 'sass'

  /**
   * use commonjs lib & source css or scss for ssr
   */
  ssr?: boolean

  /**
   * specify element-plus version to load style
   *
   * @default installed version
   */
  version?: string

  /**
   * auto import for directives
   *
   * @default true
   */
  directives?: boolean

  /**
   * exclude component name, if match do not resolve the name
   */
  exclude?: RegExp

  /**
   * a list of component names that have no styles, so resolving their styles file should be prevented
   */
  noStylesComponents?: string[]
}

/**
 * @deprecated
 * @param partialName
 * @param options
 *
 * @returns
 */
function getSideEffectsLegacy(
  partialName,
  options,
) {
  const { importStyle } = options
  if (!importStyle)
    return

  if (importStyle === 'sass') {
    return [
      'element-plus/packages/theme-chalk/src/base.scss',
      `element-plus/packages/theme-chalk/src/${partialName}.scss`,
    ]
  }
  else if (importStyle === true || importStyle === 'css') {
    return [
      'element-plus/lib/theme-chalk/base.css',
      `element-plus/lib/theme-chalk/el-${partialName}.css`,
    ]
  }
}

function getSideEffects(dirName, options) {
  const { importStyle, ssr } = options
  const themeFolder = 'ehop/theme-chalk'
  const esComponentsFolder = 'ehop/es/components'

  if (importStyle === 'sass') {
    return ssr
      ? [`${themeFolder}/src/base.scss`, `${themeFolder}/src/${dirName}.scss`]
      : [`${esComponentsFolder}/base/style/index`, `${esComponentsFolder}/${dirName}/style/index`]
  }
  else if (importStyle === true || importStyle === 'css') {
    return ssr
      ? [`${themeFolder}/base.css`, `${themeFolder}/el-${dirName}.css`]
      : [`${esComponentsFolder}/base/style/css`, `${esComponentsFolder}/${dirName}/style/css`]
  }
}

function resolveComponent(name, options) {
  if (options.exclude && name.match(options.exclude))
    return

  if (!name.match(/^Eh[A-Z]/))
    return

  if (name.match(/^EhIcon.+/)) {
    return {
      name: name.replace(/^EhIcon/, ''),
      from: '@ehop/icons-vue',
    }
  }

  const partialName = kebabCase(name.slice(2))// EhTableColumn -> table-column
  const { version, ssr } = options

  return {
    name,
    from: `ehop/${ssr ? 'lib' : 'es'}`,
    sideEffects: getSideEffects(partialName, options),
  }
}

function resolveDirective(name, options) {
  if (!options.directives)
    return

  const directives = {
    Loading: { importName: 'ElLoadingDirective', styleName: 'loading' },
    Popover: { importName: 'ElPopoverDirective', styleName: 'popover' },
    InfiniteScroll: { importName: 'ElInfiniteScroll', styleName: 'infinite-scroll' },
  }

  const directive = directives[name]
  if (!directive)
    return

  const { version, ssr } = options

  // >=1.1.0-beta.1
  if (compare(version, '1.1.0-beta.1', '>=')) {
    return {
      name: directive.importName,
      from: `element-plus/${ssr ? 'lib' : 'es'}`,
      sideEffects: getSideEffects(directive.styleName, options),
    }
  }
}

const noStylesComponents = ['ElAutoResizer']

/**
 * Resolver for Element Plus
 *
 * See https://github.com/antfu/vite-plugin-components/pull/28 for more details
 * See https://github.com/antfu/vite-plugin-components/issues/117 for more details
 *
 * @author @develar @nabaonan @sxzz
 * @link https://element-plus.org/ for element-plus
 *
 */
export function EhopResolver(
  options: EhopResolverOptions = {},
) {
  let optionsResolved

  async function resolveOptions() {
    if (optionsResolved)
      return optionsResolved
    optionsResolved = {
      ssr: false,
      version: await getPkgVersion('ehop', '0.0.0'),
      importStyle: 'css',
      directives: true,
      exclude: undefined,
      noStylesComponents: options.noStylesComponents || [],
      ...options,
    }
    return optionsResolved
  }

  return [
    {
      type: 'component',
      resolve: async (name) => {
        const options = await resolveOptions()

        if ([...options.noStylesComponents, ...noStylesComponents].includes(name))
          return resolveComponent(name, { ...options, importStyle: false })
        else return resolveComponent(name, options)
      },
    },
    {
      type: 'directive',
      resolve: async (name) => {
        return resolveDirective(name, await resolveOptions())
      },
    },
  ]
}

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
  const themeFolder = 'element-plus/theme-chalk'
  const esComponentsFolder = 'element-plus/es/components'

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

  if (!name.match(/^El[A-Z]/))
    return

  if (name.match(/^ElIcon.+/)) {
    return {
      name: name.replace(/^ElIcon/, ''),
      from: '@element-plus/icons-vue',
    }
  }

  const partialName = kebabCase(name.slice(2))// ElTableColumn -> table-column
  const { version, ssr } = options

  // >=1.1.0-beta.1
  if (compare(version, '1.1.0-beta.1', '>=')) {
    return {
      name,
      from: `element-plus/${ssr ? 'lib' : 'es'}`,
      sideEffects: getSideEffects(partialName, options),
    }
  }
  // >=1.0.2-beta.28
  else if (compare(version, '1.0.2-beta.28', '>=')) {
    return {
      from: `element-plus/es/el-${partialName}`,
      sideEffects: getSideEffectsLegacy(partialName, options),
    }
  }
  // for <=1.0.1
  else {
    return {
      from: `element-plus/lib/el-${partialName}`,
      sideEffects: getSideEffectsLegacy(partialName, options),
    }
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
export function EHopResolver(
  options = {},
) {
  let optionsResolved

  async function resolveOptions() {
    if (optionsResolved)
      return optionsResolved
    optionsResolved = {
      ssr: false,
      version: await getPkgVersion('element-plus', '2.2.2'),
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
        console.log('options', options)

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

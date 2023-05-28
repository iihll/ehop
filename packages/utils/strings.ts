import { capitalize as toCapitalize } from '@vue/shared'

export {
  camelize,
  hyphenate,
  hyphenate as kebabCase, // alias
} from '@vue/shared'

/**
 * fork from {@link https://github.com/sindresorhus/escape-string-regexp}
 */
export function escapeStringRegexp(string = '') {
  return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d')
}

// NOTE: improve capitalize types. Restore previous code after the [PR](https://github.com/vuejs/core/pull/6212) merge
export function capitalize<T extends string>(str: T) {
  return toCapitalize(str) as Capitalize<T>
}

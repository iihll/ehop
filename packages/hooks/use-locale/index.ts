import { computed, inject, isRef, ref, unref } from 'vue'
import { get } from 'lodash-unified'
import Chinese from '@ehop/locale/lang/zh-cn'

import type { MaybeRef } from '@vueuse/core'
import type { InjectionKey, Ref } from 'vue'
import type { Language } from '@ehop/locale'

export type TranslatorOption = Record<string, string | number>
export type Translator = (path: string, option?: TranslatorOption) => string
export interface LocaleContext {
  locale: Ref<Language>
  lang: Ref<string>
  t: Translator
}

export function buildTranslator(locale: MaybeRef<Language>): Translator {
  return (path, option) =>
    translate(path, option, unref(locale))
}

export function translate(path: string,
  option: undefined | TranslatorOption,
  locale: Language): string {
  return (get(locale, path, path) as string).replace(
    /\{(\w+)\}/g,
    (_, key) => `${option?.[key] ?? `{${key}}`}`,
  )
}

export function buildLocaleContext(locale: MaybeRef<Language>): LocaleContext {
  const lang = computed(() => unref(locale).name)
  const localeRef = isRef(locale) ? locale : ref(locale)
  return {
    lang,
    locale: localeRef,
    t: buildTranslator(locale),
  }
}

export const localeContextKey: InjectionKey<Ref<Language | undefined>> = Symbol('localeContextKey')

export function useLocale(localeOverrides?: Ref<Language | undefined>) {
  const locale = localeOverrides || inject(localeContextKey, ref())!
  return buildLocaleContext(computed(() => locale.value || Chinese))
}

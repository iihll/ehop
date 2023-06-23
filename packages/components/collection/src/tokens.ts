import type { Ref } from 'vue'

export type CollectionItem<T = Record<string, any>> = {
  ref: HTMLElement | null
} & T

export type EhCollectionInjectionContext = {
  itemMap: Map<HTMLElement, CollectionItem>
  getItems: <T>() => CollectionItem<T>[]
  collectionRef: Ref<HTMLElement | null>
}

export type EhCollectionItemInjectionContext = {
  collectionItemRef: Ref<HTMLElement | null>
}

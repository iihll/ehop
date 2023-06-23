import { withInstall, withNoopInstall } from '@ehop/utils'
import Carousel from './src/carousel.vue'
import CarouselItem from './src/carousel-item.vue'

export const EhCarousel = withInstall(Carousel, {
  CarouselItem,
})

export default EhCarousel

export const EhCarouselItem = withNoopInstall(CarouselItem)

export * from './src/carousel'
export * from './src/carousel-item'
export * from './src/constants'

export type { CarouselInstance, CarouselItemInstance } from './src/instance'

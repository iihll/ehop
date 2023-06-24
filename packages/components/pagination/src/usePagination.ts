import { inject } from 'vue'
import { ehPaginationKey } from './constants'

export const usePagination = () => inject(ehPaginationKey, {})

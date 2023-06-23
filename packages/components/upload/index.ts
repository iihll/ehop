import { withInstall } from '@ehop/utils'
import Upload from './src/upload.vue'

export const EhUpload = withInstall(Upload)
export default EhUpload

export * from './src/upload'
export * from './src/upload-content'
export * from './src/upload-list'
export * from './src/upload-dragger'
export * from './src/constants'

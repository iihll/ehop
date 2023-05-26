import { withInstall } from '@ehop/utils'
import Form from './src/form.vue'

export const EhForm = withInstall(Form)
export default EhForm

export * from './src/form'
export * from './src/types'
export * from './src/constants'
export * from './src/hooks'

export type FormInstance = InstanceType<typeof Form>

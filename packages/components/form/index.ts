import { withInstall, withNoopInstall } from '@ehop/utils'
import Form from './src/form.vue'
import FormItem from './src/form-item.vue'

export const EhForm = withInstall(Form, {
  FormItem,
})
export default EhForm
export const EhFormItem = withNoopInstall(FormItem)

export * from './src/form'
export * from './src/form-item'
export * from './src/types'
export * from './src/constants'
export * from './src/hooks'

export type FormInstance = InstanceType<typeof Form>
export type FormItemInstance = InstanceType<typeof FormItem>

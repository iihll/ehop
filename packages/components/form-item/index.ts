import { withInstall } from '@ehop/utils'
import FormItem from './src/form-item.vue'

export const EhFormItem = withInstall(FormItem)
export default EhFormItem

export * from './src/form-item'

export type FormItemInstance = InstanceType<typeof FormItem>

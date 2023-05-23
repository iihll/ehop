<script lang="tsx">
import { createVNode, defineComponent } from 'vue'
import { useNamespace } from '@ehop/hooks'
import type { Component } from 'vue'
import { definePropType } from '@ehop/utils'
import { useButton } from './use-button'

export default defineComponent({
  name: 'EhButton',
  props: {
    tag: {
      type: definePropType<string | Component>([String, Object]),
      default: 'button',
    },
  },
  setup(props, { slots, emit }) {
    const ns = useNamespace('button')
    const { shouldAddSpace, handleClick } = useButton(props, emit)
    // const shouldAddSpace = t

    return () => createVNode(props.tag, { ref: '_ref', onClick: handleClick }, {
      default: () => <span class={{ [ns.em('text', 'expand')]: shouldAddSpace }}>{slots.default?.()}</span>,
    })
  },
})
</script>

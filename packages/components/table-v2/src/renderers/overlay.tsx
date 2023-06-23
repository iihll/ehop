import type { SimpleFunctionalComponent } from '../types'

const Overlay: SimpleFunctionalComponent = (props, { slots }) => {
  return (
    <div class={props.class} style={props.style}>
      {slots.default?.()}
    </div>
  )
}

Overlay.displayName = 'EhTableV2Overlay'

export default Overlay

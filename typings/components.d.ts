// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    EhAside: typeof import('../packages/ehop')['EhAside']
    EhButton: typeof import('../packages/ehop')['EhButton']
    EhCol: typeof import('../packages/ehop')['EhCol']
    EhContainer: typeof import('../packages/ehop')['EhContainer']
    EhConfigProvider: typeof import('../packages/ehop')['EhConfigProvider']
    EhFooter: typeof import('../packages/ehop')['EhFooter']
    EhHeader: typeof import('../packages/ehop')['EhHeader']
    EhIcon: typeof import('../packages/ehop')['EhIcon']
    EhLink: typeof import('../packages/ehop')['EhLink']
    EhMain: typeof import('../packages/ehop')['EhMain']
    EhRow: typeof import('../packages/ehop')['EhRow']
    EhText: typeof import('../packages/ehop')['EhText']
    EhScrollbar: typeof import('../packages/ehop')['EhScrollbar']
    EhSpace: typeof import('../packages/ehop')['EhSpace']
    EhFormItem: typeof import('../packages/ehop')['EhFormItem']
    EhForm: typeof import('../packages/ehop')['EhForm']
  }
}

export {}

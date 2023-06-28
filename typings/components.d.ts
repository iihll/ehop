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
    EhInput: typeof import('../packages/ehop')['EhInput']
    EhInputNumber: typeof import('../packages/ehop')['EhInputNumber']
    EhTag: typeof import('../packages/ehop')['EhTag']
    EhTooltip: typeof import('../packages/ehop')['EhTooltip']
    EhSelect: typeof import('../packages/ehop')['EhSelect']
    EhTimePicker: typeof import('../packages/ehop')['EhTimePicker']
    EhDatePicker: typeof import('../packages/ehop')['EhDatePicker']
    EhRadio: typeof import('../packages/ehop')['EhRadio']
    EhRadioButton: typeof import('../packages/ehop')['EhRadioButton']
    EhRadioGroup: typeof import('../packages/ehop')['EhRadioGroup']
    EhTable: typeof import('../packages/ehop')['EhTable']
    EhTableColumn: typeof import('../packages/ehop')['EhTableColumn']
    EhCheckbox: typeof import('../packages/ehop')['EhCheckbox']
    EhCheckboxButton: typeof import('../packages/ehop')['EhCheckboxButton']
    EhCheckboxGroup: typeof import('../packages/ehop')['EhCheckboxGroup']
  }
}

export {}

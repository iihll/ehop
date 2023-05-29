import { withInstall, withNoopInstall } from '@ehop/utils'
import Table from './src/table.vue'
import TableColumn from './src/tableColumn'

export const EhTable = withInstall(Table, {
  TableColumn,
})
export default EhTable
export const EhTableColumn = withNoopInstall(TableColumn)

export type TableInstance = InstanceType<typeof Table>

export type TableColumnInstance = InstanceType<typeof TableColumn>

export type {
  SummaryMethod,
  Table,
  TableProps,
  TableRefs,
  ColumnCls,
  ColumnStyle,
  CellCls,
  CellStyle,
  TreeNode,
  RenderRowData,
  Sort,
  Filter,
  TableColumnCtx,
} from './src/table/defaults'

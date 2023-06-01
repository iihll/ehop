import { buildRoot } from '@ehop/build-utils'
import type { TaskFunction } from 'gulp'
import { run } from './process'

export function withTaskName<T extends TaskFunction>(name: string, fn: T) {
  return Object.assign(fn, { displayName: name })
}

export function runTask(name: string) {
  return withTaskName(`shellTask:${name}`, () =>
    run(`pnpm run start ${name}`, buildRoot),
  )
}

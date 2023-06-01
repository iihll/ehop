import path from 'node:path'
import { copyFile, mkdir } from 'node:fs/promises'
import { copy } from 'fs-extra'
import { parallel, series } from 'gulp'
import {
  buildOutput,
  ehOutput,
  ehPackage,
  projRoot,
} from '@ehop/build-utils'
import type { TaskFunction } from 'gulp'
import { buildConfig, run, runTask, withTaskName } from './src'
import type { Module } from './src'

export function copyFiles() {
  return Promise.all([
    copyFile(ehPackage, path.join(ehOutput, 'package.json')),
    copyFile(
      path.resolve(projRoot, 'README.md'),
      path.resolve(ehOutput, 'README.md'),
    ),
    copyFile(
      path.resolve(projRoot, 'global.d.ts'),
      path.resolve(ehOutput, 'global.d.ts'),
    ),
  ])
}

export const copyTypesDefinitions: TaskFunction = (done) => {
  const src = path.resolve(buildOutput, 'types', 'packages')
  const copyTypes = (module: Module) =>
    withTaskName(`copyTypes:${module}`, () =>
      copy(src, buildConfig[module].output.path, { recursive: true }),
    )

  return parallel(copyTypes('esm'), copyTypes('cjs'))(done)
}

export async function copyFullStyle() {
  await mkdir(path.resolve(ehOutput, 'dist'), { recursive: true })
  await copyFile(
    path.resolve(ehOutput, 'theme-chalk/index.css'),
    path.resolve(ehOutput, 'dist/index.css'),
  )
}

export default series(
  withTaskName('clean', () => run('pnpm run clean')),
  withTaskName('createOutput', () => mkdir(ehOutput, { recursive: true })),

  parallel(
    // runTask('buildModules'),
    runTask('buildFullBundle'),
    // runTask('generateTypesDefinitions'),
    // runTask('buildHelper'),
    // series(
    //   withTaskName('buildThemeChalk', () =>
    //     run('pnpm run -C packages/theme-chalk build'),
    //   ),
    //   copyFullStyle,
    // ),
  ),

  // parallel(copyTypesDefinitions, copyFiles),
)

export * from './src'

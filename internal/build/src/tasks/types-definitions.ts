import process from 'node:process'
import path from 'node:path'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import consola from 'consola'
import * as vueCompiler from 'vue/compiler-sfc'
import glob from 'fast-glob'
import chalk from 'chalk'
import { Project } from 'ts-morph'
import {
  buildOutput,
  ehRoot,
  excludeFiles,
  pkgRoot,
  projRoot,
} from '@ehop/build-utils'
import type { CompilerOptions, SourceFile } from 'ts-morph'
import { pathRewriter, run } from '../utils'
import { copy, readdir } from 'fs-extra'
import { buildConfig } from '../build-info'

const TSCONFIG_PATH = path.resolve(projRoot, 'tsconfig.web.json')

const outDir = path.resolve(buildOutput, 'types')

/**
 * fork = require( https://github.com/egoist/vue-dts-gen/blob/main/src/index.ts
 */
export async function generateTypesDefinitions() {
  // const compilerOptions: CompilerOptions = {
  //   emitDeclarationOnly: true,
  //   outDir,
  //   baseUrl: projRoot,
  //   preserveSymlinks: true,
  //   skipLibCheck: true,
  //   noImplicitAny: false,
  // }
  // const project = new Project({
  //   compilerOptions,
  //   tsConfigFilePath: TSCONFIG_PATH,
  //   skipAddingFilesFromTsConfig: true,
  // })

  // const sourceFiles = await addSourceFiles(project)

  // consola.success('Added source files')

  // typeCheck(project)
  // consola.success('Type check passed!')

  // await project.emit({
  //   emitOnlyDtsFiles: true,
  // })

  // const tasks = sourceFiles.map(async (sourceFile) => {
  //   const relativePath = path.relative(pkgRoot, sourceFile.getFilePath())
  //   consola.trace(
  //     chalk.yellow(
  //       `Generating definition for file: ${chalk.bold(relativePath)}`,
  //     ),
  //   )

  //   const emitOutput = sourceFile.getEmitOutput()
  //   const emitFiles = emitOutput.getOutputFiles()
  //   if (emitFiles.length === 0)
  //     throw new Error(`Emit no file: ${chalk.bold(relativePath)}`)

  //   const subTasks = emitFiles.map(async (outputFile) => {
  //     const filepath = outputFile.getFilePath()
  //     await mkdir(path.dirname(filepath), {
  //       recursive: true,
  //     })

  //     await writeFile(
  //       filepath,
  //       pathRewriter('esm')(outputFile.getText()),
  //       'utf8',
  //     )

  //     consola.success(
  //       chalk.green(
  //         `Definition for file: ${chalk.bold(relativePath)} generated`,
  //       ),
  //     )
  //   })

  //   await Promise.all(subTasks)
  // })

  // await Promise.all(tasks)
  await run('pnpm run gen:types')
  const src = path.resolve(buildOutput, 'types', 'packages', 'ehop')
  await copy(src, buildConfig.esm.output.path, { overwrite: true })
  await copy(src, buildConfig.cjs.output.path, { overwrite: true })
}

async function addSourceFiles(project: Project) {
  project.addSourceFileAtPath(path.resolve(projRoot, 'typings/env.d.ts'))

  const globSourceFile = '**/*.{js?(x),ts?(x),vue}'
  const filePaths = excludeFiles(
    await glob([globSourceFile, '!ehop/**/*'], {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true,
    }),
  )
  const ehPaths = excludeFiles(
    await glob(globSourceFile, {
      cwd: ehRoot,
      onlyFiles: true,
    }),
  )

  const sourceFiles: SourceFile[] = []
  await Promise.all([
    ...filePaths.map(async (file) => {
      if (file.endsWith('.vue')) {
        const content = await readFile(file, 'utf-8')
        const hasTsNoCheck = content.includes('@ts-nocheck')

        const sfc = vueCompiler.parse(content)

        const { script, scriptSetup } = sfc.descriptor
        if (script || scriptSetup) {
          let content
            = (hasTsNoCheck ? '// @ts-nocheck\n' : '') + (script?.content ?? '')

          if (scriptSetup) {
            const compiled = vueCompiler.compileScript(sfc.descriptor, {
              id: 'xxx',
            })
            content += compiled.content
          }

          const lang = scriptSetup?.lang || script?.lang || 'js'
          const sourceFile = project.createSourceFile(
            `${path.relative(process.cwd(), file)}.${lang}`,
            content,
          )
          sourceFiles.push(sourceFile)
        }
      }
      else {
        const sourceFile = project.addSourceFileAtPath(file)
        sourceFiles.push(sourceFile)
      }
    }),
    ...ehPaths.map(async (file) => {
      const content = await readFile(path.resolve(ehRoot, file), 'utf-8')
      sourceFiles.push(
        project.createSourceFile(path.resolve(pkgRoot, file), content),
      )
    }),
  ])

  return sourceFiles
}

function typeCheck(project: Project) {
  const diagnostics = project.getPreEmitDiagnostics()
  if (diagnostics.length > 0) {
    consola.error(project.formatDiagnosticsWithColorAndContext(diagnostics))
    const err = new Error('Failed to generate dts.')
    consola.error(err)
    throw err
  }
}

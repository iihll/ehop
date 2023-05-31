/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import findWorkspacePackages from '@pnpm/find-workspace-packages'
import type { ProjectManifest } from '@pnpm/types'
import { projRoot } from './paths'

export const getWorkspacePackages = () => findWorkspacePackages(projRoot)
export async function getWorkspaceNames(dir = projRoot) {
  const pkgs = await findWorkspacePackages(projRoot)
  return pkgs
    .filter(pkg => pkg.dir.startsWith(dir))
    .map(pkg => pkg.manifest.name)
    .filter((name): name is string => !!name)
}

export function getPackageManifest(pkgPath: string) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
  return require(pkgPath) as ProjectManifest
}

export function getPackageDependencies(pkgPath: string): Record<'dependencies' | 'peerDependencies', string[]> {
  const manifest = getPackageManifest(pkgPath)
  const { dependencies = {}, peerDependencies = {} } = manifest

  return {
    dependencies: Object.keys(dependencies),
    peerDependencies: Object.keys(peerDependencies),
  }
}

export function excludeFiles(files: string[]) {
  const excludes = ['node_modules', 'test', 'mock', 'gulpfile', 'dist']
  return files.filter(
    path => !excludes.some(exclude => path.includes(exclude)),
  )
}

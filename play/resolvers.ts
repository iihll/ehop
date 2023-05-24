function kebabCase(key: string) {
  const result = key.replace(/([A-Z])/g, ' $1').trim()
  return result.split(' ').join('-').toLowerCase()
}

export function EhopResolver() {
  return [
    {
      type: 'component',
      resolve: (name: string) => {
        if (!name.match(/^Eh[A-Z]/))
          return

        if (name.match(/^EhIcon.+/)) {
          console.log('name', name)
          return {
            name: name.replace(/^EhIcon/, ''),
            from: '@ehop/icons-vue',
          }
        }

        const dirName = kebabCase(name.slice(2))// EhTableColumn -> table-column
        const esComponentsFolder = 'ehop/es/components'

        return {
          name,
          from: 'ehop/es',
          // sideEffects: [`${esComponentsFolder}/base/style/index`, `${esComponentsFolder}/${dirName}/style/index`],
        }
      },
    },
  ]
}

export default function (plop) {
  plop.setGenerator('component', {
    description: 'gen component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'component name please',
    }],
    actions: [
      {
        type: 'add',
        path: 'packages/components/{{name}}/src/{{name}}.vue',
      },
      {
        type: 'add',
        path: 'packages/components/{{name}}/index.ts',
      },
      {
        type: 'append',
        path: 'packages/components/index.ts',
        template: 'export * from \'./{{name}}\'',
      },
    ],
  })
}

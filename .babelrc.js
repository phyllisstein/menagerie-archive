module.exports = api => {
  api.cache.never()

  const presets = [
    [
      '@babel/env',
      {
        bugfixes: true,
        corejs: {
          proposals: true,
          version: 3,
        },
        modules: 'commonjs',
        targets: {
          node: 'current',
        },
        useBuiltIns: 'usage',
      },
    ],
    [
      '@babel/react',
      {
        development: true,
        runtime: 'automatic',
        useBuiltIns: true,
      },
    ],
    '@babel/typescript',
  ]

  const plugins = [
    '@babel/proposal-async-generator-functions',
    [
      '@babel/proposal-decorators',
      {
        decoratorsBeforeExport: false,
        legacy: false,
      },
    ],
    '@babel/proposal-class-properties',
    '@babel/proposal-do-expressions',
    '@babel/proposal-export-default-from',
    '@babel/proposal-export-namespace-from',
    '@babel/proposal-function-bind',
    '@babel/proposal-function-sent',
    '@babel/proposal-logical-assignment-operators',
    '@babel/proposal-nullish-coalescing-operator',
    '@babel/proposal-numeric-separator',
    '@babel/proposal-optional-catch-binding',
    '@babel/proposal-optional-chaining',
    '@babel/proposal-partial-application',
    [
      '@babel/proposal-pipeline-operator',
      {
        proposal: 'hack',
        topicToken: '%',
      },
    ],
    '@babel/proposal-private-methods',
    '@babel/proposal-throw-expressions',
    '@babel/proposal-unicode-property-regex',
    '@babel/syntax-dynamic-import',
    [
      '@babel/transform-regenerator',
      {
        async: false,
        asyncGenerators: true,
        generators: true,
      },
    ],
    '@loadable/babel-plugin',
    ['lodash', {
      id: 'lodash-es',
    }],
    [
      'ramda',
      {
        useES: true,
      },
    ],
    [
      '@babel/transform-runtime',
      {
        absoluteRuntime: true,
        corejs: {
          proposals: true,
          version: 3,
        },
        useESModules: false,
      },
    ],
    'macros',
  ]

  return {
    ignore: [/node_modules/, /vendor/],
    presets,
    plugins,
  }
}

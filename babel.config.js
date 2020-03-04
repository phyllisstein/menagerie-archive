module.exports = api => {
  api.cache.forever()

  const presets = [
    ['@babel/env', {
      corejs: {
        proposals: true,
        version: 3,
      },
      targets: {
        node: 'current',
      },
      useBuiltIns: 'usage',
    }],
    '@babel/react',
    '@babel/typescript',
  ]

  const plugins = [
    ['@babel/proposal-decorators', {
      legacy: true,
    }],
    ['@babel/proposal-class-properties', {
      loose: true,
    }],
    '@babel/proposal-do-expressions',
    '@babel/proposal-export-default-from',
    '@babel/proposal-export-namespace-from',
    '@babel/proposal-function-bind',
    '@babel/proposal-logical-assignment-operators',
    '@babel/proposal-nullish-coalescing-operator',
    '@babel/proposal-numeric-separator',
    '@babel/proposal-optional-catch-binding',
    '@babel/proposal-optional-chaining',
    ['@babel/proposal-pipeline-operator', {
      proposal: 'smart',
    }],
    '@babel/plugin-transform-modules-commonjs',
    '@babel/proposal-throw-expressions',
    '@babel/syntax-dynamic-import',
  ]

  return {
    plugins,
    presets,
  }
}

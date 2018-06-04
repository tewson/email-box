module.exports = {
  entry: './src/EmailFirst.jsx',
  externals: {
    juice: {
      root: 'juice',
      commonjs: 'juice',
      commonjs2: 'juice',
    },
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
    },
    'react-dom/server': {
      root: 'ReactDOMServer',
      commonjs: 'react-dom/server',
      commonjs2: 'react-dom/server',
    },
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: 'babel-loader',
      },
    ],
  },
  output: {
    filename: 'EmailFirst.js',
    library: 'EmailFirst',
    libraryTarget: 'umd',
  },
  target: 'node',
};

module.exports = {
  entry: './src/EmailBox.jsx',
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
    filename: 'EmailBox.js',
    library: 'EmailBox',
    libraryTarget: 'umd',
  },
  target: 'node',
};

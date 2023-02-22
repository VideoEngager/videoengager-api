const path = require('path');
module.exports = {

  entry: {
    main: './index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'browser'),
    filename: '[name].js',
    libraryTarget: 'umd',
    clean: true,
    library: 'SmartVideoSdk'

  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}
;

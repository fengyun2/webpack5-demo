const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const nodePathParts = ['./src', './node_modules'].map(p => path.resolve(p))

module.exports = {
  // https://github.com/webpack/changelog-v5/blob/master/README.md#persistent-caching
  cache: {
    type: 'filesystem'
  },
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    // filename: 'bundle.js'
    filename: 'bundle-[contenthash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: nodePathParts
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
}

module.exports = {
  devtool: 'source-map',
  debug: true,
  cache: true,
  verbose: true,
  displayErrorDetails: true,
  stats: {
    colors: true,
    reasons: true
  },
  devServer: {
    inline: true,
    colors: true,
    historyApiFallback: true
  },
  entry: {
    'docs': './index.ts'
  },
  resolve: {
    extensions: ['', '.ts', '.js', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.html$/, loader: 'file'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.ts$/, loader: 'ts',
        query: {
          'ignoreDiagnostics': [
            // 2300, // 2300 -> Duplicate identifier
            // 2309 // 2309 -> An export assignment cannot be used in a module with other exported elements.
          ]
        },
        exclude: [
          /\.min\.js$/,
          /\.spec\.ts$/,
          /\.e2e\.ts$/,
          /node_modules/
        ]
      }
    ]
  }
};

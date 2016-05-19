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
    'angular2': [
      'rxjs',
      'reflect-metadata',
      'zone.js',
      '@angular/common',
      '@angular/core',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic'
    ],
    'app': [
      './docs/index.ts'
    ]
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js', '.json'],
    alias: {
      jQuery: 'jquery',
      'angular2materialize': 'local-angular2materialize'
    }
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
            // 2375, // 2375 -> Duplicate number index signature
            // 2309 // 2309 -> An export assignment cannot be used in a module with other exported elements.
          ]
        },
        exclude: [
          /\.min\.js$/,
          /\.spec\.ts$/,
          /\.e2e\.ts$/,
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: ['url-loader?mimetype=application/font-woff']
      },

      {
        test: /(\.ttf|\.eot|\.svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: ['url-loader']
      }
    ],
    noParse: [
      /rtts_assert\/src\/rtts_assert/,
      /reflect-metadata/,
      /angular2\/bundles\/.+/
    ]
  }
};

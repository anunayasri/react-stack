module.exports = {
  entry: {
    main: [   // package to produce
      './src/main.js'
    ]
  },
  output: {
    filename: './public/[name].js'  // [name] = name of bundle in the entry ie 'main'
  },
  module: {   // Babel transformation pipeline
    loaders: [
      {
        test: /\.jsx?$/,   // which files should pass through pipeline
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}
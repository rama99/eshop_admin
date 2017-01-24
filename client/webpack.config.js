var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: './app/main.js',
    plugins:  [ new webpack.optimize.UglifyJsPlugin({ // tree shaking and uglifying only for production environment
                  comments:false,
                  mangle:true,
                  compress: {
                      warnings: true
                  }
              })], 
    output: {
        path:'./app',
        filename:'bundle.js'
    }
}
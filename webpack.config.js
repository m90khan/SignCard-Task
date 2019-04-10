//configuration
//node package
const path = require('path');
//html plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports ={
//   //where it shoudl starts bundling
//   // './' dot means current folder
//   entry: ['babel-polyfill','./src/js/index.js'],
  // where to save the bundles
  //path to the folder and the filename
module.exports={
  //starting point
  entry: ['babel-polyfill','./src/js/index.js'],
  //output path
  output: {
    //path has to be an absolute path and for that need a node package
  path: path.resolve(__dirname, 'dist/'),  //__dirname is current absoluet path (wordking directory foodme) with the one we want to bundle in (dist)
    filename: 'js/bundle.js'
  },
devServer:{
  contentBase: './dist'
},
plugins: [

new HtmlWebpackPlugin({
  filename: 'index.html', //standard name
  template: './src/index.html' // starter html file
})],
module:{
  rules:[
    {
      test : /\.js$/,     //test all the js files use (regular expression / /)
    exclude: /node_modules/, //exclude the folder
      //all those js files will use babel loader
      use:{
        loader: 'babel-loader'
      }
    }
  ]
}
};

'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
	entry: './main.js',
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "/dist/",
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		port: 3333
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		}, {
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract("style","css!sass")
				 
		}]
	},
	plugins: [new ExtractTextPlugin("style.css")]
};
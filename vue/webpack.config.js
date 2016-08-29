const webpack = require('webpack')
module.exports = {
	entry: './src/app.js',
	output: {
		path: './js/',
		publicPath: '/js/',
		filename: 'app.js',
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin()
	],
	module: {
		loaders: [
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.js$/, loader: 'babel-loader', include: /src/, query: {cacheDirectory: true}},
			{test: /\.vue$/, loader: 'vue-loader'},
		],
	},
}

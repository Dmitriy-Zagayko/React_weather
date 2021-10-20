const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pages = [
	{
		template: path.resolve(__dirname, 'public/index.html'),
		filename: 'index.html',
	},
];
const getFileLoader = (regExp) => ({
	test: regExp,
	use: ['file-loader'],
});
const getStyleLoader = (regExp, additionalLoaders) => {
	const rules = {
		test: regExp,
		use: ['style-loader', 'css-loader'],
	};
	if (additionalLoaders && additionalLoaders.length) {
		additionalLoaders.forEach((loader) => rules.use.push(loader));
	}
	return rules;
};

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: {
		main: ['@babel/polyfill', './index.js'],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	devServer: {
		port: 5050,
	},
	plugins: [
		...pages.map((config) => new HTMLWebpackPlugin(config)),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'public/assets'),
					to: path.resolve(__dirname, 'dist/assets'),
				},
			],
		}),
	],
	module: {
		rules: [
			getStyleLoader(/\.css$/),
			getFileLoader(/\.(ttf|woff|eot)$/),
			getFileLoader(/\.(jpe?g|svg|png)$/),
			getStyleLoader(/\.s[ac]ss$/, ['sass-loader']),
			{
				test: /\.(jsx|js)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env'],
					},
				},
			},
			{
				test: /\.jsx|js$/,
				exclude: /node_modules/,
				use: {
					loader: 'eslint-loader',
				},
			},
		],
	},
};

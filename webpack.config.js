module.exports = {
	entry: {
		app: 'src/app.ts',
		vendor: 'src/vendor.ts'
	},
	output: {
		path: './build',
		filename: 'bundle-[hash:6].js'
	},
	loaders: [{
		test: /\.ts$/,
		loaders: 'ts'
	},
	{
		test: /\.css$/,
		loaders: 'style!css'
	}]
};

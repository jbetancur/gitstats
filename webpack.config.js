let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'vendor': './src/vendors.ts',
        'app': './src/app.ts'
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    output: {
        path: './build',
        filename: 'bundle-[hash:6].js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['ts', 'angular2-template-loader']
            },
            {
                test: /\.css$/,
                loaders: 'style!css'
            },
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    },
    
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'app']
        }),
        
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
    
};

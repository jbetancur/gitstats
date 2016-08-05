var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'vendor': './src/vendors',
        'app': './src/app'
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
                loaders: ['ts', 'angular2-template-loader'],
                exclude: /node_modules|bower_components/
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

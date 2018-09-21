const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebPackPlugin = require('html-webpack-plugin');

const htmlWebPackPluginConfig = new htmlWebPackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    mode: 'development',
   devtool: 'source-map',
    entry: [
        './src/index.js',
        './src/style.scss'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
            },
            {
                test:  /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        htmlWebPackPluginConfig
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
    }
};

const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module : {
        rules : [ {
            test : /\.m?jsx?$/,
            exclude : /node_modules/,
            use: {
                loader : 'babel-loader',
                options : {
                    presets: ['@babel/preset-react', '@babel/preset-env'],
                    plugins: ['@babel/plugin-transform-runtime'],
                }
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html',
        })
    ]
};

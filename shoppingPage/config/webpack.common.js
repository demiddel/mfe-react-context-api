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
        }, // CSS rules
        {
          test: /\\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
          ],
          include: /\.module\.css$/,
        }, {
            test: /\\.css$/,
            use: ["style-loader", "css-loader"],
            exclude: /\.module\.css$/, // skip CSS modules for global CSS
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

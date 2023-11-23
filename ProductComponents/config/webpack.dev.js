const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8081/',
    },
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: '/index.html',
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':
                'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers':
                'X-Requested-With, content-type, Authorization',
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'product_components',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductComponents': './src/bootstrap',
                './ProductComponent': './src/components/ProductComponent',
                './ProductListComponent':
                    './src/components/ProductListComponent',
                './ProductDetail': './src/components/ProductDetail',
            },
            shared: packageJson.dependencies,
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);

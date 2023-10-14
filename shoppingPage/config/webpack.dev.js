const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const path = require('path');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8080/',
    },
    devServer: {
        port: 8080,
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
            name: 'shoppingPage',
            remotes: {
                product_components:
                    'product_components@http://localhost:8081/remoteEntry.js',
                cart: 'cart@http://localhost:8082/remoteEntry.js',
                context_providers:
                    'context_providers@http://localhost:8083/remoteEntry.js',
            },
            shared: packageJson.dependencies,
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);

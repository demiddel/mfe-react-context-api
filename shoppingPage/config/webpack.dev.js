const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

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
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'shoppingPage',
            remotes: {
                product_components: 'product_components@http://localhost:8081/remoteEntry.js',
                cart: 'cart@http://localhost:8082/remoteEntry.js',
            },
            shared: [...packageJson.dependencies, {
                "@mfe-barcamp-react/context_providers": {
                    import: "@mfe-barcamp-react/context_providers",
                    requiredVersion: require("../context_providers/package.json").version,
                }
            }],
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);

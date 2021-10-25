const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8082/',
    },
    devServer: {
        port: 8082,
        historyApiFallback: {
            index: '/index.html',
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartComponent': './src/bootstrap',
            },
            shared: [...Object.keys(packageJson.dependencies), {
                "@mfe-barcamp-react/context_providers": {
                    import: "@mfe-barcamp-react/context_providers",
                    requiredVersion: require("../../context_providers/package.json").version,
                }
            }],
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);

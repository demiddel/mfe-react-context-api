const { merge } = require('webpack-merge');
const {ModuleFederationPlugin} = require('webpack').container;
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const devConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'context_providers',
            remotes: {
                product_components: `context_providers@${domain}/context_providers/remoteEntry.js`
            },
            shared: packageJson.dependencies,
        }),
    ]
};

module.exports = merge(commonConfig, devConfig);

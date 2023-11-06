const path = require('path');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: '../Develop/client/src/js/index',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new WebpackManifestPlugin(),
        new WorkboxPlugin.GenerateSW(),
    ],
};
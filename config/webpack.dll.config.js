var path = require("path");
var webpack = require('webpack');
// var assetsPluginInstance = require('../config/assetsPlugin');
var AssetsPlugin = require('assets-webpack-plugin');
var paths = require('./paths');

var deps = require('../package.json').dependencies;
delete deps['antd'];// antd 使用官方的 babel-plugin-antd

console.log(Object.keys(deps));

var config = {
    entry: {
        vendor_dll: Object.keys(deps)
    },
    module: {
        loaders: [
            {
                test: /\.js|\.jsx$/,
                loaders: ['babel?cacheDirectory=true'],
                exclude: /node_modules/
            }
        ]
    },
    output: {
        path: path.resolve("build/static/vendor"),
        filename: "[name].js",
        library: "[name]_[hash]", //和DllPlugin的name对应
        libraryTarget: "var"
    },
    plugins: [
        new AssetsPlugin({
            pretty: true,
            path: path.resolve('manifest'),
            update: true
        }),
        new webpack.DllPlugin({
            path: path.resolve("manifest", "vendor-manifest.json"),
            name: "[name]_[hash]",
            context: '.',
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
};

if (process.env.NODE_ENV == 'production') {
    config.output.filename = '[name].[hash].dll.js';
    config.plugins = config.plugins.concat(
        [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    drop_console: true
                },
                output: {comments: false}
            }),
            new webpack.DllPlugin({
                path: path.resolve("manifest", "vendor-manifest.json"),
                name: "[name]_[hash]"
            }),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.AggressiveMergingPlugin
        ]
    );
} else {
    config.plugins.push(
        new webpack.DllPlugin({
            path: path.resolve("manifest", "vendor-manifest-dev.json"),
            name: "[name]_[hash]"
        })
    )
}

module.exports = config;

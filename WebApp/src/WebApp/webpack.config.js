"use strict";

module.exports = {
    entry: "./Scripts/app/App.tsx",
    output: {
        filename: "wwwroot/js/bundle.js"
    },
    resolve: {
        extensions: ['', '.Webpack.js', '.web.js', '.ts', '.js', '.tsx']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'ts-loader'
            }
        ]
    }
};
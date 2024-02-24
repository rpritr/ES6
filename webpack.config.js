const webpack = require("webpack");

const path = require("path");

module.exports = {
    mode: "none",
    entry: "./app.js",
    devtool: "inline-source-map",
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, "build"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
    devServer: {
        static: [
            {
                directory: path.join(__dirname),
                publicPath: "/",
                serveIndex: true,
            },
        ],
        compress: true,
        port: 3001,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: "process/browser",
        }),
    ],
};

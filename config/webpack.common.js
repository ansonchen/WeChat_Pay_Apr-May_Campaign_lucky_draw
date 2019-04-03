const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const publishPath = "../dist";
const projectName = "";

module.exports = {
    entry: {
        app: path.resolve(__dirname, "../src/main.js")
    },
    resolve: {
        extensions: [".js", ".css", "scss"],
        alias: {
            "@": path.resolve(__dirname, "../src")
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, "../", "static"),
                to: path.resolve(__dirname, publishPath, projectName, "static")
            }
        ]),
        new CleanWebpackPlugin()
    ]
};

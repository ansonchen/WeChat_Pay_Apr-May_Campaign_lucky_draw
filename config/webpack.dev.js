const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const publishPath = "../dist";
const projectName = "";
const title = "锦鲤转盘豪赏套房";

module.exports = merge(common, {
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, publishPath, projectName),
        hot: true,
        host: "0.0.0.0"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, publishPath, projectName)
    },
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },

                    "postcss-loader",

                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "static/font",
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "static/images",
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title,
            template: path.resolve(__dirname, "../index.html")
        })
    ]
});

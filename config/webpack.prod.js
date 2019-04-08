const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const publishPath = "../dist";
const projectName = "";
const title = "锦鲤转盘豪赏套房";

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, publishPath, projectName)
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
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
                            publicPath: "../font",
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
                            publicPath: "../images/",
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title,
            template: path.resolve(__dirname, "../index.html")
        }),
        new MiniCssExtractPlugin({
            filename: path.join("./static/css/[name].[hash].css")
        })
    ]
});

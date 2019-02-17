const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin");

const alias = {
  jQuery: path.resolve('./node_modules/jquery'),
  jquery: path.resolve('./node_modules/jquery'),
  $: path.resolve('./node_modules/jquery'),
};

module.exports = {
    devtool: 'eval-cheap-module-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
        publicPath: '/',
    },
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, "/")
    },
    node: {
        fs: 'empty'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            },
            // {
            //     test: /.js/,
            //     use: [
            //       {
            //         loader: 'expose-loader',
            //         options: {
            //             sourceMap: true
            //         }
            //       }
            //     ]
            // },
            // {
            //     test: require.resolve('jquery'),
            //     use: [
            //         {
            //             loader: 'expose-loader',
            //             options: 'jQuery'
            //         },
            //         {
            //             loader: 'expose-loader',
            //             options: 'jquery'
            //         },
            //         {
            //             loader: 'expose-loader',
            //             options: '$'
            //         }
            //     ]
            // },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        // creates style nodes from JS strings
                        loader: "style-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        // translates CSS into CommonJS
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    { loader: 'resolve-url-loader' },
                    {
                        // compiles Sass to CSS
                        loader: "sass-loader",
                        options: {
                            outputStyle: 'expanded',
                            sourceMap: true,
                            sourceMapContents: true
                        }
                    }
                    // Please note we are not running postcss here
                ]
            }
            ,
            {
                // Load all images as base64 encoding if they are smaller than 8192 bytes
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // On development we want to see where the file is coming from, hence we preserve the [path]
                            name: '[path][name].[ext]?hash=[hash:20]',
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: "file-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            // Inject the js bundle at the end of the body of the given template
            inject: 'body',
        }),
        new GoogleFontsPlugin({
            fonts: [
                { family: "Encode Sans", variants: [ "300", "600" ] }
            ]
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ]
};

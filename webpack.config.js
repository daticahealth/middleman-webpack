const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: ['./source/assets/js/index.js', './source/assets/css/all.scss']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['node_modules/foundation-sites/scss', 'node_modules/motion-ui/src']
                        }
                    }
                ],
                // work around https://github.com/webpack-contrib/sass-loader/issues/556
                resolve: {
                    extensions: ['.scss', '.sass'],
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
             // Options similar to the same options in webpackOptions.output
             // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ]
};

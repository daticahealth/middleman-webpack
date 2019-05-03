const path = require('path');

module.exports = {
    externals: {
        jQuery: 'jQuery'
            // foundation: 'Foundation'
    },
    entry: {
        main: './source/assets/js/index.js'
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
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
    // resolve: {
    //     // modulesDirectories: ['./node_modules']
    //     root: [path.resolve(__dirname, 'source'), 'node_modules'],
    //     extensions: ['', '.js']
    // }
};
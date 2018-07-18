/**
 * Created by Bartlomiej Rutkowski on 18.09.17.
 */
const path = require('path');
const webpack = require('webpack');

const clientPath = path.resolve(__dirname, './client/');

module.exports = {
    devtool: 'source-map',

    entry: [
        path.join(clientPath, 'src/index.js')
    ],

    output: {
        path: path.join(clientPath, 'public'),
        filename: 'bundle.js'
    },

    resolve: {
        alias: {
            public: `${clientPath}/public`,
            components: `${clientPath}/src/components`,
            views: `${clientPath}/src/views`,
            consts$: `${clientPath}/src/consts`,
            LanguageWrapper$: `${clientPath}/src/LanguageWrapper`
        },
        extensions: ['.js']
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env'],
                    plugins: [
                        'transform-class-properties'
                    ]
                }
            }
        }, {
            test: /\.scss?$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'sass-loader'
            }],
            include: path.join(clientPath, 'src/styles')
        }, {
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }]
        }, {
            test: /\.png$/,
            loader: 'file-loader'
        }, {
            test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader'
        }]
    }
};

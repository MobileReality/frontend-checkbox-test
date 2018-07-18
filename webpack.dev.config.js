const path = require('path');
const webpack = require('webpack');

const clientPath = path.resolve(__dirname, './client/');

module.exports = {
    devtool: 'eval',

    entry: `${clientPath}/src/index.js`,

    resolve: {
        alias: {
            public: `${clientPath}/public`,
            components: `${clientPath}/src/components`,
            views: `${clientPath}/src/views`,
            consts$: `${clientPath}/src/consts.js`,
            LanguageWrapper$: `${clientPath}/src/LanguageWrapper`
        },
        extensions: ['.js']
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                CLIENT: JSON.stringify(true),
                NODE_ENV: JSON.stringify('development'),
            }
        })
    ],

    module: {
        rules: [
            {
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
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.join(clientPath, 'public'),
        compress: true,
        port: 8000
    },
};

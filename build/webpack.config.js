/**
 * Created by lusha on 2018/8/9.
 */

const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, '../src/index.js')
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].[hash].js',
        publicPath: '' //静态资源文件引入时的路径（加在饮用静态资源前面）
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    //配置loader
    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [
                    path.join(__dirname, '../node_modules')
                ]
            }
        ]
    },
    plugins: [
        new HTMLPlugin({
            template: path.join(__dirname, '../src/index.html')
        })
    ]
}
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// 告知 express 使用 webpack-dev-middleware，
// 以及将 webpack.config.config.js 配置文件作为基础。
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
}))

// 将文件 serve 到 port 3000。
app.listen(3000, ()=>{
    console.log('程序搭载的端口号为：3000!\n');
})
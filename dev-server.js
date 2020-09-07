const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.js');

const oprions = {
    contentBase: './dist',
    hot: true,
    host: 'localhost',
};

webpackDevServer.addDevServerEntrypoints(config, oprions);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, oprions);

server.listen(5000, 'localhost', ()=>{
    console.log('dev server listening on port 5000');
})
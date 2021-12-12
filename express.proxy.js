const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const express = require('express');
const httpProxy = require('http-proxy');
const webpackConfig = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');

const devMiddleware = new webpackDevMiddleware(webpack(webpackConfig));
const apiProxy = httpProxy.createProxyServer();
const app = express();

app.use(devMiddleware);
app.get('/api', (request, response) => {
  apiProxy.web(request, response, {
    target: 'http://localhost:3001/get-secret-data',
    ignorePath: true,
  });
});

const indexPath = path.join(__dirname, 'dist/index.html');

app.use(express.static(indexPath));
app.use((request, response) => {
  fs.readFile(indexPath, (error, file) => {
    if (error) {
      response.status(404).send(error.toString());
    } else {
      response.status(200).send(file.toString());
    }
  });
});

app.listen(3000, () => {
  console.log('express.proxy started on port 3000');
});


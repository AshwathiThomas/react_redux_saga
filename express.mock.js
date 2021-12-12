const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const express = require('express');
const webpackConfig = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');

const devMiddleware = new webpackDevMiddleware(webpack(webpackConfig));
const app = express();

app.use(devMiddleware);
app.get('/api', (request, response) => {
  response.json({ data: 'mocked data from express.mock.js' });
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
  console.log('Server started on port 3000');
});

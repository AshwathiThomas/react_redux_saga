const path = require('path');

const distPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'main.js',
    path: distPath,
  },
  mode: 'development',
  devServer: {
    index: 'index.html',
    contentBase: distPath,
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001/get-secret-data',
        pathRewrite: { '^/api': '' },
      },
    },
  },
};

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
        bypass: (request, response) => {
          if (request.url.substr(-4) === '/api') {
            response.send({ data: 'mocked data from webpack.devserver.mock.config.js' })
          }
        },
      },
    },
  },
};

const path = require('path');

const distPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'main.js',
    path: distPath,
  },
  mode: 'development',
};

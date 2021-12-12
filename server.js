const path = require('path');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.get('/movie-list/:pageNo', (request, response) => {
  const obj = fs.readFileSync(path.resolve(`json/CONTENTLISTINGPAGE-PAGE${request.params.pageNo}.json`));
  const json = JSON.parse(obj);
  response.json(json);
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});


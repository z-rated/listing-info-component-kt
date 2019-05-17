/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const { getRestaurantById } = require('../db/index.js');

const app = express();

app.use(express.static(path.join(__dirname, '/../public')));

app.get('/api/info/', (req, res) => {
  const { id } = req.query;
  console.log(id);
  getRestaurantById(id)
    .then(([data]) => {
      res.send(data);
    });

  // res.send(id);
});

app.listen(1234, () => {
  console.log('Server listening on port 1234!');
});

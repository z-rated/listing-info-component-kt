/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const { getRestaurantById } = require('../db/index.js');

const app = express();

app.use(express.static(path.join(__dirname, '/../public')));

app.get('/api/restaurants/:id/info/', (req, res) => {
  const { id } = req.params;

  getRestaurantById(id)
    .then(([data]) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(1234, () => {
  console.log('Server listening on port 1234!');
});

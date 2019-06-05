/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const cors = require('cors');
const { getRestaurantById } = require('../db/index.js');

const PORT = 3002;

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/restaurants/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'));
});

app.get('/api/restaurants/:id/info', (req, res) => {
  const { id } = req.params;

  getRestaurantById(id)
    .then(([data]) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post('/api/restaurants/info', () => {
// create a new item
});

app.put('/api/restaurants/:id/info', () => {
// update an item
});

app.delete('/api/restaurants/:id/info', () => {
// delete an item
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});

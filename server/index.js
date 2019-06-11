/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const cors = require('cors');
// const { getRestaurantById } = require('../db/index.js');
const { getRestaurantById } = require('../db/postgres/index.js');

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
    .then((data) => {
      /*
      first split on space, then split on dash(-), then parse to get number
      */
      // let monHoursArr = data.monhours.split(' ');
      // let tuesHoursArr = data.tueshours.split(' ');
      // let wedHoursArr = data.wedhours.split(' ');
      // let thursHoursArr = data.thurshours.split(' ');
      // let friHoursArr = data.frihours.split(' ');
      // let satHoursArr = data.sathours.split(' ');
      // let sunHoursArr = data.sunhours.split(' ');
      const parsedMonOpenTime = parseInt(data.monhours.split('-')[0].slice(0, -2));
      const parsedMonCloseTime = parseInt(data.monhours.split('-')[1].slice(0, -2));
      const parsedTuesOpenTime = parseInt(data.tueshours.split('-')[0].slice(0, -2));
      const parsedTuesCloseTime = parseInt(data.tueshours.split('-')[1].slice(0, -2));
      const parsedWedOpenTime = parseInt(data.wedhours.split('-')[0].slice(0, -2));
      const parsedWedCloseTime = parseInt(data.wedhours.split('-')[1].slice(0, -2));
      const parsedThursOpenTime = parseInt(data.thurshours.split('-')[0].slice(0, -2));
      const parsedThursCloseTime = parseInt(data.thurshours.split('-')[1].slice(0, -2));
      const parsedFriOpenTime = parseInt(data.frihours.split('-')[0].slice(0, -2));
      const parsedFriCloseTime = parseInt(data.frihours.split('-')[1].slice(0, -2));
      const parsedSatOpenTime = parseInt(data.sathours.split('-')[0].slice(0, -2));
      const parsedSatCloseTime = parseInt(data.sathours.split('-')[1].slice(0, -2));
      const parsedSunOpenTime = parseInt(data.sunhours.split('-')[0].slice(0, -2));
      const parsedSunCloseTime = parseInt(data.sunhours.split('-')[1].slice(0, -2));

      const CoordSplit = data.coordinates.split('');
      CoordSplit.splice(CoordSplit.indexOf('N') + 1, 0, ',');


      const parsedData = {
        location: { address: data.address, coords: CoordSplit.join('') },
        hours: {
          Monday: { open: parsedMonOpenTime, close: parsedMonCloseTime },
          Tuesday: { open: parsedTuesOpenTime, close: parsedTuesCloseTime },
          Wednesday: { open: parsedWedOpenTime, close: parsedWedCloseTime },
          Thursday: { open: parsedThursOpenTime, close: parsedThursCloseTime },
          Friday: { open: parsedFriOpenTime, close: parsedFriCloseTime },
          Saturday: { open: parsedSatOpenTime, close: parsedSatCloseTime },
          Sunday: { open: parsedSunOpenTime, close: parsedSunCloseTime },
        },
        id: data.id,
        name: data.name,
        phone: data.phonenumber,
        website: data.website,
      };
      res.send(parsedData);
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

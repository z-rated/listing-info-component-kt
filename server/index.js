/* eslint-disable no-console */
const nr = require('newrelic');
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
// const { getRestaurantById } = require('../db/index.js');
const { getRestaurantById, addRestaurantInfo, deleteRestaurantInfo, updateRestaurantInfo } = require('../db/postgres/index.js');

const PORT = 3002;

const app = express();

app.use(cors());
app.use(bodyParser.json());

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
      // console.log(id);
      res.status(200);
      res.send(parsedData);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
      // console.log(err);
    });
});

app.post('/api/restaurants/info', (req, res) => {
// create a new item
  // console.log('REQ SENT WITH POST: ', req.body);
  addRestaurantInfo(req.body)
    .then(() => {
      console.log('Successfully posted to database');
      res.status(201);
      res.end();
    })
    .catch((err) => {
      console.log('ERROR posting to DB: ', err);
      res.status(500);
      res.send(err);
    });
});

app.put('/api/restaurants/:id/info', (req, res) => {
// update an item
  updateRestaurantInfo(req.body)
    .then(() => {
      console.log('Successfully updated record in DB');
      res.end();
    })
    .catch((err) => {
      console.log('ERROR updating record in DB: ', err);
      res.send(err);
    });
});

app.delete('/api/restaurants/:id/info', (req, res) => {
// delete an item
  const { id } = req.params;
  deleteRestaurantInfo(id)
    .then(() => {
      console.log('Successfully deleted record');
      res.end();
    })
    .catch((err) => {
      console.log('ERROR deleting record: ', err);
      res.send(err);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});

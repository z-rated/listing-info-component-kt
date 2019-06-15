'use strict';

module.exports = {
  generateRandomData
};

const {
  name,
  urls,
  coords,
  addresses,
  phoneNumbers,
  hours,
} = require('./db/data.js');

function generateRandomData(userContext, events, done) {
  const n = Math.floor((Math.random() * 100) + 0);
  const id = Math.floor((Math.random() * 10000000) + 0);
  const restaurantName = name[n];
  const address = addresses[n];
  const coordinates = coords[n];
  const phonenumber = phoneNumbers[n];
  const website = urls[n];
  const monHoursOpen = hours[n].Monday.open;
  const monHoursClose = hours[n].Monday.close;
  const tuesHoursOpen = hours[n].Tuesday.open;
  const tuesHoursClose = hours[n].Tuesday.close;
  const wedsHoursOpen = hours[n].Wednesday.open;
  const wedsHoursClose = hours[n].Wednesday.close;
  const thursHoursOpen = hours[n].Thursday.open;
  const thursHoursClose = hours[n].Thursday.close;
  const friHoursOpen = hours[n].Friday.open;
  const friHoursClose = hours[n].Friday.close;
  const satHoursOpen = hours[n].Saturday.open;
  const satHoursClose = hours[n].Saturday.close;
  const sunHoursOpen = hours[n].Sunday.open;
  const sunHoursClose = hours[n].Sunday.close;

  // add variables to virtual user's context:
  userContext.vars.id = id;
  userContext.vars.restaurantName = restaurantName;
  userContext.vars.address = address;
  userContext.vars.coordinates = coordinates;
  userContext.vars.website = website;
  userContext.vars.phonenumber = phonenumber;
  userContext.vars.monOpenHours = monHoursOpen;
  userContext.vars.monHoursClose = monHoursClose;
  userContext.vars.tuesHoursOpen = tuesHoursOpen;
  userContext.vars.tuesHoursClose = tuesHoursClose;
  userContext.vars.wedsHoursOpen = wedsHoursOpen;
  userContext.vars.wedsHoursClose = wedsHoursClose;
  userContext.vars.thursHoursOpen = thursHoursOpen;
  userContext.vars.thursHoursClose = thursHoursClose;
  userContext.vars.friHoursOpen = friHoursOpen;
  userContext.vars.friHoursClose = friHoursClose;
  userContext.vars.satHoursOpen = satHoursOpen;
  userContext.vars.satHoursClose = satHoursClose;
  userContext.vars.sunHoursOpen = sunHoursOpen;
  userContext.vars.sunHoursClose = sunHoursClose;
  // continue with executing the scenario:
  return done();
}

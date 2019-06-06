/* eslint-disable func-names */
// const zlib = require('zlib');
const fs = require('fs');
const v8 = require('v8');

const {
  name,
  urls,
  coords,
  addresses,
  phoneNumbers,
  hours,
} = require('./data.js');

// USE GZIP TO ZIP CSV FILE IF NEEDED
// const gzip = zlib.createGzip();
// const inp = fs.createReadStream('input.txt');
// const out = fs.createWriteStream('input.txt.gz');
// inp.pipe(gzip).pipe(out);

const writeStream = fs.createWriteStream('./db/data-doc.csv');

const header = 'id,name,address,coordinates,phoneNumber,website,monHoursOpen,monHoursClose,tuesHoursOpen,tuesHoursClose,wedsHoursOpen,wedsHoursClose,thursHoursOpen,thursHoursClose,friHoursOpen,friHoursClose,satHoursOpen,satHoursClose,sunHoursOpen,sunHoursClose' + '\n';

writeStream.write(header);
for (let i = 1; i < 10000001; i += 1) {
  const n = Math.floor((Math.random() * 100) + 0);
  const restaurantName = name[n];
  const address = addresses[n];
  const coordinates = coords[n];
  const phoneNumber = phoneNumbers[n];
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

  const row = `${i},${restaurantName},${address},${coordinates},${phoneNumber},${website},${monHoursOpen},${monHoursClose},${tuesHoursOpen},${tuesHoursClose},${wedsHoursOpen},${wedsHoursClose},${thursHoursOpen},${thursHoursClose},${friHoursOpen},${friHoursClose},${satHoursOpen},${satHoursClose},${sunHoursOpen},${sunHoursClose}\n`;

  if (i % 1000000 === 0) {
    console.log(i);
  }

  writeStream.write(row);
}
writeStream.end();
writeStream.on('finish', () => {
  console.log('Write success.');
  console.log(v8.getHeapStatistics());
});
writeStream.on('error', (err) => {
  console.log(err.stack);
  console.log(v8.getHeapStatistics());
});

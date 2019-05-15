let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurant_info')
let Schema = mongoose.Schema;
let { urls, coords, addresses, phoneNumbers, hours } = require('./data.js');

let restaurantSchema = new Schema({
    id: Number,
    location: {
        address: String,
        coords: String
    },
    phone: String,
    website: String,
    hours: {
        Monday: { open: Number, close: Number },
        Tuesday: { open: Number, close: Number },
        Wednesday: { open: Number, close: Number },
        Thursday: { open: Number, close: Number },
        Friday: { open: Number, close: Number },
        Saturday: { open: Number, close: Number },
        Sunday: { open: Number, close: Number },
    }
})

var Restaurant = mongoose.model('restaurants', restaurantSchema);

//GENERATE RANDOM DATA USING IMPORTED DATA PIECES
(function () {
    let data = [];

    for (let i = 0; i < 100; i++) {
        data.push({
            id: i,
            location: {
                address: addresses[i],
                coords: coords[i]
            },
            phone: phoneNumbers[i],
            website: urls[i],
            hours: hours[i]
        });
    }
    //END

    console.log(data);

    mongoose.connection.collections['restaurants'].drop(function (err) {
        if (err) { console.log(err) }
        console.log('\nRESTAURANTS COLLECTION DROPPED.');
    });

    //INSERT DATA INTO DB
    Restaurant.insertMany(data, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('DB seeded!')
    });
})()

module.exports = Restaurant
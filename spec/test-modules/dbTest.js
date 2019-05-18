const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restaurant_info', { useNewUrlParser: true });
const { Schema } = mongoose;

const restaurantSchema = new Schema({
  id: Number,
  location: {
    address: String,
    coords: String,
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
  },
});

const Restaurant = mongoose.model('restaurants', restaurantSchema);

const checkDBData = cb => Restaurant.find({}, (err, docs) => {
  if (err) throw new Error(err);
  cb(docs);
});

// checkDBData((docs) => { console.log(docs.length) });

module.exports = checkDBData;

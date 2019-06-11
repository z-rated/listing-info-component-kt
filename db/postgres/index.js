const db = require('./postgres_config.js');

const getRestaurantById = id => new Promise((resolve, reject) => {
  console.log('ID:::::::', id);
  console.log('db: ', db);
  db.one(`select * from restaurant_info, hours where restaurant_info.id=${id} AND hours.restaurant_id=${id}`)
    .then((data) => {
      console.log('DATA FROM DATABASE!!!: ', data);
      resolve(data);
    })
    .catch((error) => {
      console.log('ERROR:', error);
      reject(error);
    });
});

module.exports = {
  getRestaurantById,
};

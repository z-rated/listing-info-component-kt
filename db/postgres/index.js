const db = require('./postgres_config.js');

const getRestaurantById = id => new Promise((resolve, reject) => {
  // console.log('ID:::::::', id);
  db.one(`select * from restaurant_info, hours where restaurant_info.id=${id} AND hours.restaurant_id=${id}`)
    .then((data) => {
      // console.log('DATA FROM DATABASE!!!: ', data);
      resolve(data);
    })
    .catch((error) => {
      console.log('ERROR:', error);
      reject(error);
    });
});

const addRestaurantInfo = dataObject => new Promise((resolve, reject) => {
  /*
  Basic syntax of INSERT INTO statement is as follows −
    INSERT INTO TABLE_NAME (column1, column2, column3,...columnN)
    VALUES (value1, value2, value3,...valueN);

    Simple INSERT
db.none('INSERT INTO users(name, active) VALUES($1, $2)', ['John', true])
    .then(() => {
        // success;
    })
    .catch(error => {
        // error;
    });
  */
  let listingInfo = dataObject;
  db.one(`INSERT INTO restaurant_info(id,name,address,coordinates,phonenumber,website) VALUES(nextval('my_serial'),'${listingInfo.name}','${listingInfo.address}','${listingInfo.coordinates}','${listingInfo.phonenumber}','${listingInfo.website}') RETURNING id`)
    .then((idData) => {
      listingInfo.id = idData.id;
      // console.log('LISTING ID: ', listingInfo.id);
      db.none(`INSERT INTO hours(id,restaurant_id,monhours,tueshours,wedhours,thurshours,frihours,sathours,sunhours) VALUES(nextval('hours_serial'),${listingInfo.id},'${listingInfo.monhours}','${listingInfo.tueshours}','${listingInfo.wedhours}','${listingInfo.thurshours}','${listingInfo.frihours}','${listingInfo.sathours}','${listingInfo.sunhours}')`)
        .then(() => {
          // console.log('RECORD SAVED IN DB');
          resolve('RECORD SAVED IN DB');
        })
        .catch((err) => {
          console.log('ERROR SAVING RECORD TO DB: ', err);
        });
    })
    .catch((error) => {
      console.log('ERROR SAVING RECORD TO DB: ', error);
      reject(error);
    });
});

const deleteRestaurantInfo = id => new Promise((resolve, reject) => {
  /*
  The basic syntax of DELETE query with WHERE clause is as follows −
    DELETE FROM table_name
    WHERE [condition];

  http://vitaly-t.github.io/pg-promise/Database.html#result

  db.result(query, values, a => a.rowCount)
    .then(count => {
        // count = number of rows deleted
    })
    .catch(error => {
        // error
    })
  */
  db.result(`DELETE FROM restaurant_info WHERE restaurant_info.id=${id}`, a => a.rowCount)
    .then((count) => {
      console.log('COUNT: ', count);
      resolve(null, count);
    })
    .catch((error) => {
      console.log('ERROR DELETING IN DB: ', error);
      reject(error);
    });
});

const updateRestaurantInfo = dataObject => new Promise((resolve, reject) => {
  /*
  The basic syntax of UPDATE query with WHERE clause is as follows −
    UPDATE table_name
    SET column1 = value1, column2 = value2...., columnN = valueN
    WHERE [condition];

  const dataSingle = {id: 1, val: 123, msg: 'hello'};

    pgp.helpers.update(dataSingle, ['val', 'msg'], 'my-table') + ' WHERE id = ' + dataSingle.id;
//=> UPDATE "my-table" SET "val"=123,"msg"='hello' WHERE id = 1
  */

  db.helpers.update(dataObject, ['name', 'address', 'coordinates', 'phonenumber', 'website'], 'restaurant_info') + 'WHERE id = ' + dataObject.id;
  db.helpers.update(dataObject, ['monhours', 'tueshours', 'wedhours', 'thurshours', 'frihours', 'sathours', 'sunhours'], 'hours') + 'WHERE restaurant_id = ' + dataObject.id;
});

module.exports = {
  getRestaurantById, addRestaurantInfo, deleteRestaurantInfo, updateRestaurantInfo,
};

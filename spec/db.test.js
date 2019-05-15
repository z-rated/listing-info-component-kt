const checkDBData = require('./test-modules/dbTest.js');
const mongoose = require('mongoose')

test(`DB contains 100 documents.`, () => {
    checkDBData((docs) => {
        expect(docs.length).toBe(100);
        mongoose.connection.close();
    });
});
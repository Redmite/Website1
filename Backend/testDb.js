var db = require('./dbBroker.js'); //import the db_broker.js file so we can use the newAccount function

db.dbNewAccount('mrfooder07', 'Redmite', 'dummyPassword', 'Alsaedi', 'Yusuf'); //call the newAccount function and pass it the data we want to insert into the database
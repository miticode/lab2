const mongoose = require('mongoose');
const Nations = require('./models/nations');

const url = 'mongodb://localhost:27017/football';
 const connect = mongoose.connect(url);

connect.then((db) => {

console.log('Connected correctly to server');

var newNation = Nations({
 name: 'Qatar',
 });

newNation.save()
 .then((nation) => {
 console.log(nation);
 return Nations.find({}).exec();
 })
 .then((nations) => {
 console.log(nations);

return Nations.deleteMany({});
 })
 .then(() => {
    console.log('All nations deleted');
 return mongoose.connection.close();
 })
 .catch((err) => {
 console.log(err);
 });
 
});
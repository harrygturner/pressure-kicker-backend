const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const routes = require("./app/routes/routes");

app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/ppdb', { useNewUrlParser: true }, (err, db) => {
   if (err) throw err;
});

const db = mongoose.connection;
// check to see if connected 
db.once('open', () => {
   console.log('Connection has been made!')
}).on('error', err => {
   console.log('Connection error: ' + err.message)
});

const port = 8080;

app.use('/', routes)

app.listen(port, function () {
   console.log("Running ppdb on port " + port);
});
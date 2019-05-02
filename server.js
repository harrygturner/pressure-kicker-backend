const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const apiRoutes = require("./app/routes/apiRoutes")

const teamsData = require("./data/teams")

app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/ppdb', { useNewUrlParser: true }, (err, db) => {
   if (err) throw err;

   // insert multiple documents to 'teams' collection 
   db.collection("teams").insertMany(teamsData, function (err, res) {
      if (err) throw err;
      console.log(res.insertedCount + " documents inserted");
      // close the connection to db when you are done with it
      db.close();
   });
});


const db = mongoose.connection;
// check to see if connected 
db.once('open', () => {
   console.log('Connection has been made!')
}).on('error', err => {
   console.log('Connection error: ' + err.message)
});

const port = 8080;

app.get('/', (req, res) => res.send('Hello World with Express'));

app.use('/api', apiRoutes)

app.listen(port, function () {
   console.log("Running ppdb on port " + port);
});
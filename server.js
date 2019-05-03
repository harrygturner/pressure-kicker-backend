const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const routes = require("./app/routes/routes")

const teamsData = require("./data/teams");
const kickersData = require("./data/kickers");


app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/ppdb', { useNewUrlParser: true }, (err, db) => {
   if (err) throw err;

   // drop all databases
   db.collection('teams').deleteMany();
   db.collection('kickers').deleteMany();

   // insert multiple documents to 'teams' collection 
   db.collection("teams").insertMany(teamsData, function (err, res) {
      if (err) throw err;
      console.log(res.insertedCount + " documents inserted");
   });

   // insert multiple documents to 'kickers' collection 
   db.collection("kickers").insertMany(kickersData, function (err, res) {
      if (err) throw err;
      console.log(res.insertedCount + " documents inserted");
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

// app.get('/', (req, res) => res.send('Hello World with Express'));

app.use('/', routes)

// app.get('/teams', async (req, resp) => {
//    try {
//       const result = await Team.find().exec();
//       resp.send(result);
//    } catch (error) {
//       resp.status(500).send(error);
//    }
// })

app.listen(port, function () {
   console.log("Running ppdb on port " + port);
});
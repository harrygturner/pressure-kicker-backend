const mongoose = require('mongoose');

const teamsData = require("./data/teams");
const kickersData = require("./data/kickers");


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

   db.close();
});

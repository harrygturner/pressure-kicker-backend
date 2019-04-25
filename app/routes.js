const con = require('./config/db');

module.exports = function (app, db) {
   app.get("/teams", (req, res, next) => {
      
      const queryString = 'SELECT * FROM team'
      con.query(queryString, function (err, rows, fields) {
         if (err) return console.log('Error while performing Query.');
         res.json(rows);
      });
   });

   app.post('/notes', (req, res) => {
      console.log(req.body)
      // You'll create your note here.
      res.send('Hello')
   });
};
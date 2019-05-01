const con = require('./config/db');

module.exports = function (app, db) {
   app.get("/teams", (req, res) => {
      
      const queryString = 'SELECT * FROM Teams'
      con.query(queryString, function (err, rows, fields) {
         if (err) return console.log('Error while performing Query.');
         res.json(rows);
      });
   });

   app.get("/teams/:id", (req, res) => {
      const userId = req.params.id;
      const queryString = 'SELECT * FROM Teams WHERE id = ?';
      con.query(queryString, [userId], (err, rows, fields) => {
         if (err) return console.log('Error while performing Query.');
         res.json(rows);
      })
   })

   app.get('/week/:week_number', (req, res) => {
      const weekNumber = req.params.week_number;
      const queryString = ` 
         SELECT Matches.home_team_id, Matches.away_team_id, Matches.home_points, Matches.away_points 
         FROM Matches, Match_week 
         WHERE Match_week.week_number = ? 
      `;
      con.query(queryString, [weekNumber], (err, rows, fields) => {
         if (err) return console.log('Error while performing Query.');
         res.json(rows);
      })
   })

   app.get('/match/:id', (req, res) => {
      const matchId = req.params.id;
      const queryString = 'SELECT * FROM Matches WHERE match_id = ?';
      con.query(queryString, [matchId], (err, rows, fields) => {
         if (err) return console.log('Error while performing Query.');
         res.json(rows);
      })
   })

   app.post('/notes', (req, res) => {
      console.log(req.body)
      // You'll create your note here.
      res.send('Hello')
   });
};
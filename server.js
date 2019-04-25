const express     = require('express');
const bodyParser  = require('body-parser');
const con         = require('./app/config/db');
const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

con.connect((err, database) => {
   if (err) return console.error('Error: ' + err.message);

   require('./app/app.js')(app, database);
   app.listen(port, () => {
      console.log('We are live on ' + port);
   });
})

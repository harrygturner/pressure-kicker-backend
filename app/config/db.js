const mysql = require('mysql');

module.exports = mysql.createConnection({
   host: 'localhost',
   user: 'harrygturner',
   password: 'Honeyjerry_16',
   database: 'ppdb',
})
module.exports = function (app, db) {
   app.get("/", (req, res, next) => {
      res.json(["Harry", "My First", 'Server']);
   });

   app.post('/notes', (req, res) => {
      console.log(req.body)
      // You'll create your note here.
      res.send('Hello')
   });
};
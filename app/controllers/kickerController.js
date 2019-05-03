const Kicker = require('../models/Kicker');

exports.index = function (req, res) {
   Kicker.get(function (err, teams) {
      if (err) {
         res.json({
            status: "error",
            message: err,
         });
      }
      res.json({
         status: "success",
         message: "Kickers retrieved successfully",
         data: teams
      });
   });
};
// Handle create kicker actions
exports.new = async (req, res) => {
   try {
      const kicker = new Kicker(req.body);
      const result = await kicker.save();
      res.json({
         message: 'New kicker created!',
         data: result
      });
   } catch (error) {
      res.status(500).json(error)
   }
};

// Handle view kicker info
exports.view = function (req, res) {
   Kicker.findById(req.params.id, function (err, kicker) {
      if (err) return res.send(err);
      res.json({
         message: 'Kicker details loading..',
         data: kicker
      });
   });
};

// Handle delete kicker
exports.delete = function (req, res) {
   Kicker.remove({
      _id: req.params.id
   }, function (err, kicker) {
      if (err) return res.send(err);
      res.json({
         status: "success",
         message: 'Kicker deleted'
      });
   });
};
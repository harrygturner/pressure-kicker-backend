const Team = require('../models/Team');

exports.index = function (req, res) {
   Team.get(function (err, teams) {
      if (err) {
         res.json({
            status: "error",
            message: err,
         });
      }
      res.json({
         status: "success",
         message: "Teams retrieved successfully",
         data: teams
      });
   });
};

// Handle create team actions
exports.new = async (req, res) => {
   try {
      const team = new Team(req.body);
      const result = await team.save();
      res.json({
         message: 'New team created!',
         data: result
      });
   } catch (error) {
      res.status(500).json(error)
   }
};

// Handle view team info
exports.view = function (req, res) {
   Team.findById(req.params.id, function (err, team) {
      if (err) return res.send(err);
      res.json({
         message: 'Team details loading..',
         data: team
      });
   });
};

// Handle delete team
exports.delete = function (req, res) {
   Team.remove({
      _id: req.params.id
   }, function (err, team) {
      if (err) return res.send(err);
      res.json({
         status: "success",
         message: 'Team deleted'
      });
   });
};
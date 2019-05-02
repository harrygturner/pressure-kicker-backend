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
exports.new = function (req, res) {
   const team = new Team();
   team.name = team.name;
   
   // save the team and check for errors
   team.save(function (err) {
      if (err) return res.json(err);
      res.json({
         message: 'New team created!',
         data: team
      });
   });
};

// Handle view team info
exports.view = function (req, res) {
   Team.findById(req.params.team_id, function (err, team) {
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
      _id: req.params.team_id
   }, function (err, team) {
      if (err) return res.send(err);
      res.json({
         status: "success",
         message: 'Team deleted'
      });
   });
};
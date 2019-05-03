const router = require('express').Router();

router.get('/', function (req, res) {
   res.json({
      status: 'API Its Working',
      message: 'Welcome to the Pressure Predictor db, crafted with love!',
   });
})

const teamController = require('../controllers/teamController');

router.route('/teams')
   .get(teamController.index)
   .post(teamController.new);
router.route('/teams/:id')
   .get(teamController.view)
   .delete(teamController.delete);

const kickerController = require('../controllers/kickerController');

router.route('/kickers')
   .get(kickerController.index)
   .post(kickerController.new);
router.route('/kickers/:id')
   .get(kickerController.view)
   .delete(kickerController.delete);

module.exports = router;

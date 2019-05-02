const router = require('express').Router();

router.get('/', function (req, res) {
   res.json({
      status: 'API Its Working',
      message: 'Welcome to RESTHub crafted with love!',
   });
})

const teamController = require('../controllers/teamController');

router.route('/teams')
   .get(teamController.index)
   .post(teamController.new);
router.route('/teams/:id')
   .get(teamController.view)
   .delete(teamController.delete);

module.exports = router;

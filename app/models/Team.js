const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Setup schema
const kickerSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   position: {
      type: Number,
      required: true
   }
})

const teamSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   kickers: [{ type: Schema.Types.ObjectId, ref: 'Kickers' }]
});

// Export team model
const Team = mongoose.model('Team', teamSchema);
module.exports = Team;

module.exports.get = function (callback, limit) {
   Team.find(callback).limit(limit);
};
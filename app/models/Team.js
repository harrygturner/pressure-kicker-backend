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
   kickers: [kickerSchema]
});

// Export team model
const Team = module.exports = mongoose.model('team', teamSchema);

module.exports = Team;
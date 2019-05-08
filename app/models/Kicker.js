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

// Export team model
const Kicker = mongoose.model('Kicker', kickerSchema);
module.exports = Kicker;

module.exports.get = function (callback, limit) {
   Kicker.find(callback).limit(limit);
};
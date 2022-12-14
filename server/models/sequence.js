const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let sequenceSchema = new Schema({
  maxTreeId: {
    type: Number,
    required: true
  },
  maxMessageId: {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model('Sequence', sequenceSchema);
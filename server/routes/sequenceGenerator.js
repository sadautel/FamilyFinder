var Sequence = require('../models/sequence');


var maxTreeId;
var maxMessageId;
var sequenceId = null;

function SequenceGenerator() {

  Sequence.findOne()
    .exec(function(err, sequence) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }

      sequenceId = sequence._id;
      maxTreeId = sequence.maxTreeId;
      maxMessageId = sequence.maxMessageId;
    });
}

SequenceGenerator.prototype.nextId = function(collectionType) {

  var updateObject = {};
  var nextId;

  switch (collectionType) {
    case 'tree':
      maxTreeId++;
      updateObject = {maxTreeId: maxTreeId};
      nextId = maxTreeId;
      break;
      case 'messages':
        maxMessageId++;
        updateObject = {maxMessageId: maxMessageId};
        nextId = maxMessageId;
        break;
    default:
      return -1;
  }

  Sequence.update({_id: sequenceId}, {$set: updateObject},
    function(err) {
      if (err) {
        console.log("nextId error = " + err);
        return null
      }
    });

  return nextId;
}

module.exports = new SequenceGenerator();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let treeSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  birthDate: {
    type: String,
    required: true,
  },
  birthPlace: {
    type: String,
    required: true,
  },
  deathDate: {
    type: String
  },
  deathPlace: {
    type: String
  },
  motherFirstName: {
    type: String
  },
  motherLastName: {
    type: String
  },
  fatherFirstName: {
    type: String
  },
  fatherLastName: {
    type: String
  },
  imageUrl: {
    type: String,
  },

});

module.exports = mongoose.model("Tree", treeSchema);
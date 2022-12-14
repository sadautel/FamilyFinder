const sequenceGenerator = require("./sequenceGenerator");
const Tree = require("../models/tree");
var express = require("express");

var router = express.Router();

router.get("/", (req, res, next) => {
  Tree.find()
    .then((tree) => {
      res.status(200).json({
        message: "Retrieved tree from database.",
        tree: tree,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "There was a problem retrieving the tree from the database.",
        error: err,
      });
    });
});

router.post("/", (req, res, next) => {
  const maxTreeId = sequenceGenerator.nextId("tree");

  const tree = new Tree({
    id: maxTreeId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    birthDate: req.body.birthDate,
    birthPlace: req.body.birthPlace,
    deathDate: req.body.deathDate,
    deathPlace: req.body.deathPlace,
    motherFirstName: req.body.motherFirstName,
    motherLastName: req.body.motherLastName,
    fatherFirstName: req.body.fatherFirstName,
    fatherLastName: req.body.fatherLastName,
    imageUrl: req.body.imageUrl,
  });
  tree
    .save()
    .then((createdTree) => {
      res.status(201).json({
        message: "Tree added successfully.",
        tree: createdTree,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "There was a problem creating the tree.",
        error: err,
      });
    });
});

router.put("/:id", (req, res, next) => {
  Tree.findOne({ id: req.params.id })
    .then((tree) => {
        tree.firstName = req.body.firstName;
        tree.lastName = req.body.lastName;
        tree.gender = req.body.gender;
        tree.birthDate = req.body.birthDate;
        tree.birthPlace = req.body.birthPlace;
        tree.deathDate = req.body.deathDate;
        tree.deathPlace = req.body.deathPlace;
        tree.motherFirstName = req.body.motherFirstName;
        tree.motherLastName = req.body.motherLastName;
        tree.fatherFirstName = req.body.fatherFirstName;
        tree.fatherLastName = req.body.fatherLastName;
        tree.imageUrl = req.body.imageUrl;
      

      Tree.updateOne({ id: req.params.id }, tree)
        .then((result) => {
          res.status(204).json({
            message: "Tree updated successfully",
          });
        })
        .catch((err) => {
          res.status(500).json({
            message: "There was a problem updating the tree.",
            error: err,
          });
        });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Tree not found.",
        error: err,
      });
    });
});

router.delete("/:id", (req, res, next) => {
  Tree.findOne({ id: req.params.id })
    .then((tree) => {
      Tree.deleteOne({ id: req.params.id })
        .then((result) => {
          res.status(204).json({
            message: "Tree deleted successfully",
          });
        })
        .catch((err) => {
          res.status(500).json({
            message: "There was a problem deleting the Tree.",
            error: err,
          });
        });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Tree not found.",
        error: err,
      });
    });
});

module.exports = router;
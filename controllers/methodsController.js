const db = require("../models");

// Defining methods for the methodsController
module.exports = {
  findAll: function(req, res) {
    db.Method
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Method
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Method
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Method
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Method
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findByDifficulty: function(req, res) {
    console.log('here 3');
     db.Method
    .find({ difficulty: req.params.difficulty })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
    },

    findByName: function(req, res) {
      console.log(req.params);
      console.log('here also')
      db.Method
      .findOne({ method: req.params.method})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    }

    
    
 
};

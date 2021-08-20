const Pet = require("../models/pet.models");

const getAllPet = (req, res) => {
  Pet.find({})
    .sort({type: "ascending", name:"ascending"})
    .then((pets) => {
      res.json(pets);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const createPet = (req, res) => {
  Pet.create({
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
    skillOne: req.body.skillOne,
    skillTwo: req.body.skillTwo,
    skillThree: req.body.skillThree
  })
    .then((newPet) => res.json(newPet))
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getOnePet = (req, res) => {
  Pet.findOne({ _id: req.params.id })
    .then((pet) => {
      res.json(pet);
    })
    .catch((err) => {
      res.status.status(400).json(err);
    });
};

const updatePet = (req, res) => {
  Pet.findByIdAndUpdate(
    { _id: req.params.id },
    {
      name: req.body.name,
      type: req.body.type,
      description: req.body.description,
      skillOne: req.body.skillOne,
      skillTwo: req.body.skillTwo,
      skillThree: req.body.skillThree
    },
    {
      new: true,
      useFindAndModify: true,
      runValidators: true
    }
  )
    .then((pet) => {
      res.json(pet);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const deletePet = (req, res) => {
  Pet.deleteOne({ _id: req.params.id })
    .then(deleteconfirm => {
      res.json(deleteconfirm);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  getAllPet,
  createPet,
  getOnePet,
  updatePet,
  deletePet,
};
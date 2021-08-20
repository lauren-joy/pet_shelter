const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required and must be more than 3 characters long"],
    minlength: [3, "Name is required and must be more than 3 characters long"]
  },
  type: {
      type: String,
      required: [true, "Type is required and must be more than 3 characters long"],
      minlength: [3, "Type is required and must be more than 3 characters long"]
  },
  description: {
      type: String,
      required: [true, "Description is required and must be more than 3 characters long"],
      minlength: [3, "description is required and must be more than 3 characters long"]
  },
  skillOne: {
    type: String,
  },
  skillTwo: {
    type: String,
  },
  skillThree: {
    type: String,
  }

}, {timestamps:true});

const Pet = mongoose.model('Pet', PetSchema);
module.exports = Pet
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const g2Schema = new Schema({
  firstName: String,
  lastName: String,
  licenseNumber: String,
  age: String,
  dob: String,
  make: String,
  model: String,
  year: String,
  plateNumber: String,

  signupUsername: String,
  signupPassword: String,
  UserType: String,
});

const g2user = mongoose.model("g2user", g2Schema);

module.exports = g2user;

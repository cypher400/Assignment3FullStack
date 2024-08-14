const signupUserModel = require("../models/g2model");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  if (req.body.signupPassword != req.body.signupRepeatPassword) {
    console.log("Passwords do not match");
  } else {
    try {
      const hashPwd = await bcrypt.hash(req.body.signupPassword, 10);
      console.log(req.body.userType);
      const user = await signupUserModel.create({
        firstName: "default",
        lastName: "default",
        licenseNumber: "default",
        age: "default",
        dob: "default",
        signupUsername: req.body.signupUsername,
        signupPassword: hashPwd,
        UserType: req.body.userType,
        make: "default",
        model: "default",
        year: "default",
        platno: "default",
      });

      console.log("New user", user);

      user.save();

      return res.redirect("/");
    } catch (error) {
      console.log(error);
      return res.redirect("/");
    }
  }
};

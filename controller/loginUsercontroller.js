// Importing th bcrypt modulle
const userModel = require("../models/g2model");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  const userName = req.body.username;
  const password = req.body.password;
  console.log(password);
  try {
    const findOneUser = await userModel.findOne({ signupUsername: userName });

    if (findOneUser) {
      // Comparing the two passwords
      const userMatch = await bcrypt.compare(
        password,
        findOneUser.signupPassword
      );

      if (userMatch) {
        req.session.userId = findOneUser._id;
        global.userId = findOneUser.UserType;
        console.log(req.session.userId);
        console.log(req.session);
        console.log("user logged in!!!!");

        return res.redirect("/");
      } else {
        return res.redirect("/g2");
      }
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.log(error);
    res.redirect("/login");
  }
};

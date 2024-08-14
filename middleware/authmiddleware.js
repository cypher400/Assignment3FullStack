const User = require("../models/g2model");

module.exports = async (req, res, next) => {
  const finduser = await User.findById(req.session.userId);

  if (!finduser) {
    console.log("not a valid user!!");
    return res.redirect("/");
  }

  next();
};

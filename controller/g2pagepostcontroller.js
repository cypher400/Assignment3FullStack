const { response } = require('express');
const userModel = require('../models/g2model')

module.exports = async (req, res) => {
    // Create a JSON object with user data from the request body
    const newuser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        licenseNumber: req.body.licenseNumber,
        age: req.body.age,
        dob: req.body.dob,
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        plateNumber: req.body.plateNumber
    };
    
    
    
    try {
        await userModel.findByIdAndUpdate(req.session.userId, newuser);
        res.redirect('/g2');
    } catch (err) {
        res.status(401).send({ message: err.message });
    }
};

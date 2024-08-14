const userModel = require('../models/g2model')
  
module.exports = async (req, res) => {
    if (req.body.userId) {
        const { make, model, year, plateNumber, userId } = req.body;
        try {
            const user = await userModel.findById(userId);
            if (!user) {
                console.log('User not found in database.');
                return res.writeHead(404).send({ error: 'User not found' });
            }
            // Update car information
            user.make = make;
            user.model = model;
            user.year = year;
            user.plateNumber = plateNumber;
            await user.save();
            console.log('Car information updated successfully.');
            return res.redirect('/g');
        } catch (error) {
            console.error('Error:', error.message);
            res.writeHead(500).send({ message: error.message });
        }
    } else {
    //    
    }
};

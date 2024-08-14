const userModel = require('../models/g2model')

module.exports = async (req, res) => {
    try {
        // Find user by userId stored in session
        const user = await userModel.findById(req.session.userId);
        
        if (!user) {
            return res.render('g', { error: 'No User Found', user: null });
        }
        
        return res.render('g', { error: null, user });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send({ message: error.message });
    }
};

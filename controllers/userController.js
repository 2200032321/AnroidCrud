
const User = require('../User');


exports.createUser = async (req, res) => {
    try {
        const { email, name, password, age } = req.body;
        const user = await User.create({ email, name, password, age });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
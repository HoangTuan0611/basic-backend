const User = require('../models/userModel');

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users', error: err.message });
    }
};

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const newUser = await User.create({ name, email, password });
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ message: 'Error creating user', error: err.message });
    }
};

module.exports = { getUsers, createUser };

const User = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
exports.signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(401).json({ error: 'User already exists' });
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword, role });
        await user.save();
        res.status(201).json({ message: 'Signup sucessful' , user:user});
    } catch (err) {
        console.error('signup error', err);
        res.status(500).json({ error: 'signup failed' });
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ error: 'invalid creadential' });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: 'invalid creadential' });
        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ message: 'login successful', token: token });
    } catch (err) {
        console.error('signup error', err);
        res.status(500).json({ error: 'signup failed' });
    }
}


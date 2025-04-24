import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import { hashPassword, verifyPassword } from '../utils/passwordUtils.js';
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if(!email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const user = await User.findOne({ email });
    if(!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const isPasswordValid = await verifyPassword(user.password, password);
    if(!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
}
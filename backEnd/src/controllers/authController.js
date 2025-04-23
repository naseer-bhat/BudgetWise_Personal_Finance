import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import { hashPassword, verifyPassword } from '../utils/passwordUtils.js';
export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if(!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const existingUser = await User.find
    if(existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
  } catch (error) {
    
  }
}
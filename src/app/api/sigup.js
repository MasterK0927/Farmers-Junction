// pages/api/register.js
import User from '../../models/User';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  const { username, email, password } = req.body;

  // Check if user already exists
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists.' });
  }

  // Hash password and create new user
  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = new User(username, email, hashedPassword);
  users.push(newUser);

  res.status(201).json({ message: 'User registered successfully.' });
}

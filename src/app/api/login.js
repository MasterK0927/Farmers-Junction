// pages/api/login.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  const { email, password } = req.body;

  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }

  const token = jwt.sign({ userId: user.id }, 'secretKey', { expiresIn: '1h' });

  res.status(200).json({ token });
}

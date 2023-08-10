import type { NextApiRequest, NextApiResponse } from 'next';
import User from '@/shared/mongoose/models/user';
import generateToken from '@/shared/functions/jwt/generateToken';
import connectDB from '@/shared/mongoose/connectDB';
import { setCookie } from 'cookies-next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  await connectDB();

  try {
    const user = await User.findOne({ email });
    if (!user) throw "L'user non esiste";

    const isPassword = await user.matchPassword(password);
    if (!isPassword) throw 'La password non combacia';

    const token = generateToken(user._id);

    setCookie('jwt', token, { req, res, maxAge: 1000 * 60 * 60 * 3 });

    res.status(200).json({ success: 'Login riuscito. Token settato' });
  } catch (e) {
    console.error(e);
    res.status(400).json({ error: e });
  }
}

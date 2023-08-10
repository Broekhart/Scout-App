import { userErrors } from '@/shared/functions/handleErrors';
import connectDB from '@/shared/mongoose/connectDB';
import User from '@/shared/mongoose/models/user';
import { RegisterDataRequest } from '@/shared/types/extendedRequests';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const registerData = (req as RegisterDataRequest).body;

  await connectDB();

  try {
    const newUser = await User.create(registerData);
    res.status(200).json(newUser);
  } catch (e) {
    res.status(400).json({ error: userErrors(e) });
  }
}

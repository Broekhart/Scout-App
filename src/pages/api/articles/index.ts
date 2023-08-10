import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@/shared/mongoose/connectDB';
import Scout from '@/shared/mongoose/models/scout';
import { scoutErrors } from '@/shared/functions/handleErrors';
import checkToken from '@/shared/middlewares/checkToken';
import { ScoutRequest } from '@/shared/types/extendedRequests';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  const { method, query, body } = req as ScoutRequest;

  if (method === 'GET') {
    try {
      const scouts = await Scout.find(query);
      if (!scouts) throw 'Gli scout non esistono';

      res.status(200).json(scouts);
    } catch (e: any) {
      res.status(400).json({ error: e.message });
    }
  } else if (method === 'POST') {
    try {
      const scout = await Scout.create(body);

      res.status(200).json(scout);
    } catch (e) {
      res.status(400).json({ error: scoutErrors(e) });
    }
  }
}

export default checkToken(handler);

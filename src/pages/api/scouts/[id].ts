import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@/shared/mongoose/connectDB';
import Scout from '@/shared/mongoose/models/scout';
import { genericErrors } from '@/shared/functions/handleErrors';
import checkToken from '@/shared/middlewares/checkToken';
import { ScoutRequest } from '@/shared/types/extendedRequests';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  const { id } = req.query;
  const { method, body } = req as ScoutRequest;

  if (method === 'GET') {
    try {
      const scout = await Scout.findById(id);
      res.status(200).json(scout);
    } catch (e: any) {
      console.error(e);
      res.status(400).json({ error: e.message });
    }
  } else if (method === 'PUT') {
    try {
      const scout = await Scout.findById(id);
      if (!scout) throw 'Nessuno scout trovato';

      for (const [key, value] of Object.entries(body)) {
        scout[key] = value;
        await scout.save();
      }
      res.status(200).json({ message: 'Scout aggiornato', scout });
    } catch (e) {
      console.error(e);
      res.status(400).json({ error: genericErrors(e) });
    }
  }
}

export default checkToken(handler);

import type { NextApiRequest, NextApiResponse } from 'next';
import verifyUserByToken from '../functions/jwt/verifyUserByToken';
import { verifyUserErrors } from '../functions/handleErrors';

const checkToken = (handler: (req: NextApiRequest, res: NextApiResponse) => void) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const token = req.headers.authorization?.split(' ')[1] ?? '';
      if (!token) res.status(401).json({ error: "L'utente non è autorizzato. Il token è mancante" });

      const user = await verifyUserByToken(token);
      if (!user) res.status(401).json({ error: "L'utente non è autorizzato. Il token non è valido" });
      if (req.body) req.body.authorId = user._id;

      return handler(req, res);
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: verifyUserErrors(e) });
    }
  };
};

export default checkToken;

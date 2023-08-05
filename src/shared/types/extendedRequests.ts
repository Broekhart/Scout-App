import { NextApiRequest } from 'next';

export interface RegisterDataRequest extends NextApiRequest {
  body: {
    name: string;
    password: string;
    club: string;
    email: string;
  };
}

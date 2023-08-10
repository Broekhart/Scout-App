import { NextApiRequest } from 'next';

export interface RegisterDataRequest extends NextApiRequest {
  body: {
    name: string;
    password: string;
    club: string;
    email: string;
  };
}

export interface ScoutRequest extends NextApiRequest {
  body: {
    name: string;
    experience: string;
    availability: string;
    description?: string;
    coverImage?: string;
    skills?: string[];
  };
}

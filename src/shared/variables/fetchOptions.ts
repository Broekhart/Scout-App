import token from './token';

export const POST_OPTIONS = (data: any) => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify(data),
});

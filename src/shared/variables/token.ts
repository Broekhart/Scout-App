import { getCookie } from 'cookies-next';

const token = getCookie('jwt') ?? '';

export default token;

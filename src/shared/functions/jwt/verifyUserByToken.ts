import jwt, { GetPublicKeyOrSecret, Secret } from 'jsonwebtoken';
import User from '../../mongoose/models/user';

type Token = Secret | GetPublicKeyOrSecret;

const verifyUserByToken = async (token: string) => {
  try {
    const { id } = (await jwt.verify(token, process.env.JWT_SECRET as Token)) as unknown as { id: string };
    const user = await User.findById(id);

    return user;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export default verifyUserByToken;

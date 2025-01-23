import jsonwebtoken from "jsonwebtoken";
import { config } from "dotenv";

config();

const jwt = jsonwebtoken;

const ACESS_TOKEN_SECRET = process.env.ACESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

export interface IPayloadJWT {
  id: string;
  username: string;
  role: string;
}

export function generateAcessToken(user: IPayloadJWT): string {
  return jwt.sign(user, ACESS_TOKEN_SECRET, { expiresIn: "15m" });
}

export function generateRefreshToken(userId: string): string {
  return jwt.sign({ id: userId }, REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
}

export function verifyRefreshToken(token: string): IPayloadJWT {
  return jwt.verify(token, REFRESH_TOKEN_SECRET);
}

import jsonwebtoken from "jsonwebtoken";
import { config } from "dotenv";
config();
const jwt = jsonwebtoken;
const ACESS_TOKEN_SECRET = process.env.ACESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
export function generateAcessToken(user) {
    return jwt.sign(user, ACESS_TOKEN_SECRET, { expiresIn: "1h" });
}
export function generateRefreshToken(userId) {
    return jwt.sign({ id: userId }, REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
}
export function verifyRefreshToken(token) {
    return jwt.verify(token, REFRESH_TOKEN_SECRET);
}

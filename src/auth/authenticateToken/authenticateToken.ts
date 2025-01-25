import { NextFunction, Request, Response } from "express";
import { config } from "dotenv";
import jsonwebtoken from "jsonwebtoken";

const jwt = jsonwebtoken;
config();

export class AuthenticateToken {
  authenticateToken(req: Request, res: Response, next: NextFunction): void {
    const token = req.header("Authorization")?.split(" ")[1];
    console.log(token)

    if (!token) return res.status(401).json({ error: "Token is Required" });

    try {
      const verified = jwt.verify(token, process.env.ACESS_TOKEN_SECRET);
      req.user = verified;
      next();
    } catch (err) {
      res.status(403).json({ error: "Token invalid or expired" });
    }
  }
}

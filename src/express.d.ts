import { IPayloadJWT } from "./auth/utils/jwtUtils";

declare module "express-serve-static-core" {
  interface Request {
    user?: IPayloadJWT; 
  }
}
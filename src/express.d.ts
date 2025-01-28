import { IPayloadJWT } from "./auth/utils/jwtUtils";

declare module "express-serve-static-core" {
  interface Request {
    user?: IPayloadJWT; 
  }
}

export function json(): any {
  throw new Error("Function not implemented.");
}

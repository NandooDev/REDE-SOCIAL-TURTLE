import { PrismaClient } from "../../../node_modules/.prisma/client/index";
import { INewAcessToken } from "../../controllers/auth/newAcessToken/protocols";
import {
  generateAcessToken,
  IPayloadJWT,
  verifyRefreshToken,
} from "../utils/jwtUtils";

const prisma = new PrismaClient();

export class NewAcessToken implements INewAcessToken {
  async newAcessToken(refreshToken: string): Promise<string> {
    try {
      const verifyRefresh = verifyRefreshToken(refreshToken);

      const user = await prisma.users.findUnique({
        where: {
          id: verifyRefresh.id,
        },
      });

      if (!user) {
        return "User not found";
      }

      const payload: IPayloadJWT = {
        id: user.id!,
        username: user.username!,
        role: user.role!,
      };

      return generateAcessToken(payload);
    } catch (err) {
      console.error("Error generating new access token:", err);
      throw new Error("Invalid Token");
    }
  }
}

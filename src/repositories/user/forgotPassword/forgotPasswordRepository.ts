import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import { IForgotPasswordRepository } from "../../../controllers/user/forgotPassword/protocols";

const prisma = new PrismaClient();

export class ForgotPasswordRepository implements IForgotPasswordRepository {
  async forgotPassword(
    email: string,
    currentPassword: string,
    newPassword: string
  ): Promise<string> {
    try {
      const updatePassword = await prisma.users.updateMany({
        where: {
          email: email,
        },
        data: {
          password: newPassword,
        },
      });

      if (updatePassword.count === 1) {
        return "Sucess";
      }

      return "Error";
    } finally {
      await prisma.$disconnect();
    }
  }
}

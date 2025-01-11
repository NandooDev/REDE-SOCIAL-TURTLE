import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import {
  ILoginUsersRepository,
  IUserParamsLogin,
} from "../../../controllers/user/loginUsers/protocols";
import { VerifyPassword } from "../../../cryptography/verifyPassword";

const prisma = new PrismaClient();

export class LoginUsersRepository implements ILoginUsersRepository {
  async loginUsers(loginParams: IUserParamsLogin): Promise<boolean> {
    try {
      // verificar se email existe no banco de dados
      const passwordCriptography = await prisma.users.findUnique({
        where: {
          email: loginParams.email,
        },
        select: {
          password: true,
        },
      });

      if (!passwordCriptography) {
        return false;
      }

      const password: string = loginParams.password;

      const verifyPassword = new VerifyPassword();

      const passwordVerify = await verifyPassword.verify(
        password,
        passwordCriptography.password
      );

      if (!passwordVerify) {
        return false;
      }

      return true;
    } finally {
      await prisma.$disconnect();
    }
  }
}

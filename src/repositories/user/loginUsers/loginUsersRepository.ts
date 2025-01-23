import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import {
  ILoginUsersRepository,
  IPayloadLoginReturn,
  IUserParamsLogin,
} from "../../../controllers/user/loginUsers/protocols";
import { VerifyPassword } from "../../../cryptography/verifyPassword";

const prisma = new PrismaClient();

export class LoginUsersRepository implements ILoginUsersRepository {
  async loginUsers(
    loginParams: IUserParamsLogin
  ): Promise<IPayloadLoginReturn> {
    try {
      // verificar se email existe no banco de dados
      const passwordCriptography = await prisma.users.findUnique({
        where: {
          email: loginParams.email,
        },
        select: {
          id: true,
          username: true,
          role: true,
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
        const payload = {
          login: false,
        };
        return payload;
      }

      const payload = {
        login: true,
        id: passwordCriptography.id,
        username: passwordCriptography.username,
        role: passwordCriptography.role,
      };

      return payload;
    } finally {
      await prisma.$disconnect();
    }
  }
}

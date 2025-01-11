import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import { IGetUsersByUsernameRepository } from "../../../controllers/user/getUsersByUsername/protocols";
import { IUserModel } from "../../../models/iUserModel";

const prisma = new PrismaClient();

export class GetUsersByUsernameRepository
  implements IGetUsersByUsernameRepository
{
  async getUsersByUsername(username: string): Promise<IUserModel> {
    try {
      const user = await prisma.users.findUnique({
        where: {
          username: username,
        },
      });

      return user;
    } finally {
      await prisma.$disconnect();
    }
  }
}

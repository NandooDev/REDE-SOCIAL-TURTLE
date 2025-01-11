import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import { IGetUsersRepository } from "../../../controllers/user/get-users/protocols";
import { IUserModel } from "../../../models/iUserModel";

const prisma = new PrismaClient();

export class GetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<IUserModel[]> {
    try {
      const users: IUserModel = await prisma.users.findMany();
      return users;
    } finally {
      await prisma.$disconnect();
    }
  }
}

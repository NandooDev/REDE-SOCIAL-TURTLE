import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import {
  ICreateUsersParams,
  ICreateUsersRepository,
} from "../../../controllers/user/createUsers/protocols";
import { IUserModel } from "../../../models/iUserModel";

const prisma = new PrismaClient();

export class CreateUsersRepository implements ICreateUsersRepository {
  async createUsers(params: ICreateUsersParams): Promise<IUserModel> {
    try {
      const user = await prisma.users.create({
        data: params,
        select: {
          id: true,
          name: true,
          username: true,
          email: true,
        },
      });

      if (!user) {
        throw new Error("User not created");
      }

      return user;
    } finally {
      await prisma.$disconnect();
    }
  }
}

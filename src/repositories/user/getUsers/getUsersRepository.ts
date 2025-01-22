import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import { IGetUsersRepository } from "../../../controllers/user/getUsers/protocols";
import { IUserModel } from "../../../models/iUserModel";

const prisma = new PrismaClient();

export class GetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<IUserModel[]> {
    try {
      const users: IUserModel = await prisma.users.findMany({
        select: {
          id: true,
          name: true,
          username: true,
          email: true,
          profile_photo: true,
          followers: true,
          bio: true,
          posts: {
            select: {
              id: true,
              title: true,
              content: true,
              attachment: true,
              published: true,
            },
          },
        },
      });
      return users;
    } finally {
      await prisma.$disconnect();
    }
  }
}

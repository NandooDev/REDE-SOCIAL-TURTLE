import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import { IAddFollowerRepository } from "../../../controllers/user/addFollower/protocols";
import { IUserModel } from "../../../models/iUserModel";

const prisma = new PrismaClient();

export class AddFollowerRepository implements IAddFollowerRepository {
  async addFollower(username: string): Promise<IUserModel> {
    const addFollower = await prisma.users.update({
      where: {
        username: username,
      },
      data: {
        followers: { increment: 1 },
      },
      select: {
        username: true,
        followers: true,
      },
    });

    return addFollower;
  }
}

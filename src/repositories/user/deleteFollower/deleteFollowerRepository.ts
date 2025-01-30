import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import { IDeleteFollowerRepository } from "../../../controllers/user/deleteFollower/protocols";
import { IUserModel } from "../../../models/iUserModel";

const prisma = new PrismaClient();

export class DeleteFollowerRepository implements IDeleteFollowerRepository {
  async deleteFollower(username: string): Promise<IUserModel> {
    const deleteFollower = await prisma.users.update({
      where: {
        username: username,
      },
      data: {
        followers: { decrement: 1 },
      },
      select: {
        username: true,
        followers: true,
      },
    });

    return deleteFollower;
  }
}

import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import {
  IUpdateUsersParams,
  IUpdateUsersRepository,
} from "../../../controllers/user/updateUsers/protocols";
import { IUserModel } from "../../../models/iUserModel";

const prisma = new PrismaClient();

export class UpdateUsersRepository implements IUpdateUsersRepository {
  async updateUsers(
    id: string,
    params: IUpdateUsersParams
  ): Promise<IUserModel> {
    await prisma.users.update({
      where: {
        id: id,
      },
      data: params,
    });

    const user = await prisma.users.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new Error("User not updated");
    }

    return user;
  }
}

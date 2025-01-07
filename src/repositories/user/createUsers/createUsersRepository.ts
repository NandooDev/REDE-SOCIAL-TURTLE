import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import {
  ICreateUsersParams,
  ICreateUsersRepository,
} from "../../../controllers/user/createUsers/protocols";
import { IUserModel } from "../../../models/iUserModel";

const prisma = new PrismaClient();

export class CreateUsersRepository implements ICreateUsersRepository {
  async createUsers(params: ICreateUsersParams): Promise<IUserModel> {
    const user = await prisma.users.create({
      data: params,
    });

    if (!user) {
      throw new Error("User not created");
    }

    return user;
  }
}

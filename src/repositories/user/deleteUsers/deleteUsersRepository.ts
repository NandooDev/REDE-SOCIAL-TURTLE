import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import { IDeleteUsersRepository } from "../../../controllers/user/deleteUsers/protocols";

const prisma = new PrismaClient();

export class DeleteUsersRepository implements IDeleteUsersRepository {
  async deleteUsers(id: string): Promise<string> {
    // validar se usuário existe
    const user = await prisma.users.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new Error("User not exists");
    }

    await prisma.users.delete({
      where: {
        id: id,
      },
    });

    //validar se user foi deletado
    if (user) {
      throw new Error("User not deleted");
    }

    return "User deleted successfully";
  }
}

import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import { IDeleteUsersRepository } from "../../../controllers/user/deleteUsers/protocols";

const prisma = new PrismaClient();

export class DeleteUsersRepository implements IDeleteUsersRepository {
  async deleteUsers(id: string): Promise<string> {
    try {
      // Validar se usuário existe
      const user = await prisma.users.findUnique({
        where: {
          id: id,
        },
      });

      if (!user) {
        throw new Error("User not exists");
      }

      // Deletar o profile associado
      await prisma.profile.deleteMany({
        where: {
          id_user: id,
        },
      });

      // Deletar o usuário
      await prisma.users.delete({
        where: {
          id: id,
        },
      });

      return "User deleted successfully";
    } finally {
      await prisma.$disconnect();
    }
  }
}

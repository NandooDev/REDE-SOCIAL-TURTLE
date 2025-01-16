import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import { IDeleteLikesRepository } from "../../../controllers/like/deleteLikes/protocols";

const prisma = new PrismaClient();

export class DeleteLikesRepository implements IDeleteLikesRepository {
  async deleteLike(id: string): Promise<string> {
    try {
      const like = await prisma.likes.findUnique({ where: { id } });

      if (!like) {
        throw new Error("Like not exists");
      }

      await prisma.likes.delete({ where: { id } });

      return "Like deleted successfully";
    } finally {
      await prisma.$disconnect();
    }
  }
}

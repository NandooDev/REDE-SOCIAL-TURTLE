import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import { IDeleteCommentsRepository } from "../../../controllers/comment/deleteComments/protocols";

const prisma = new PrismaClient();

export class DeleteCommentsRepository implements IDeleteCommentsRepository {
  async deleteComment(id: string): Promise<string> {
    try {
      const comment = await prisma.coments.findUnique({ where: { id } });

      if (!comment) {
        throw new Error("Comment not exists");
      }

      await prisma.coments.delete({ where: { id } });

      return "Comment deleted successfully";
    } finally {
      await prisma.$disconnect();
    }
  }
}

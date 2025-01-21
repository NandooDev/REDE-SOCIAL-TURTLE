import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import { IMyCommentsRepository } from "../../../controllers/comment/myComments/protocols";
import { ICommentModel } from "../../../models/iCommentModel";

const prisma = new PrismaClient();

export class MyCommentsRepository implements IMyCommentsRepository {
  async getMyComments(id_user: string): Promise<ICommentModel[]> {
    try {
      const myComments = await prisma.coments.findMany({
        where: {
          id_user: id_user,
        },
      });

      return myComments;
    } finally {
      await prisma.$disconnect();
    }
  }
}

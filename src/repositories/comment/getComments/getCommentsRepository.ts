import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import { IGetCommentsRepository } from "../../../controllers/comment/getComments/protocols";
import { ICommentModel } from "../../../models/iCommentModel";

const prisma = new PrismaClient();

export class GetCommentsRepository implements IGetCommentsRepository {
  async getComments(): Promise<ICommentModel[]> {
    try {
      const comments: ICommentModel[] = await prisma.coments.findMany();
      return comments;
    } finally {
      await prisma.$disconnect();
    }
  }
}
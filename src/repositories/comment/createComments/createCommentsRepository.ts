import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import {
  ICommentParams,
  ICreateCommentsRepository,
} from "../../../controllers/comment/createComments/protocols";
import { ICommentModel } from "../../../models/iCommentModel";

const prisma = new PrismaClient();

export class CreateCommentsRepository implements ICreateCommentsRepository {
  async createComment(params: ICommentParams): Promise<ICommentModel> {
    try {
      const comment = await prisma.coments.create({
        data: {
          content: params.content,
          id_post: params.id_post,
          id_user: params.id_user,
        },
      });

      return comment;
    } finally {
      await prisma.$disconnect();
    }
  }
}

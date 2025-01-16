import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import { ICreateLikesRepository } from "../../../controllers/like/createLikes/protocols";
import { ILikeModel } from "../../../models/iLikeModel";

const prisma = new PrismaClient();

export class CreateLikesRepository implements ICreateLikesRepository {
  async createLike(params: {
    id_post: string;
    id_user: string;
  }): Promise<ILikeModel[]> {
    try {
      const like = await prisma.likes.create({
        data: {
          id_post: params.id_post,
          id_user: params.id_user,
        },
      });

      return like;
    } finally {
      await prisma.$disconnect();
    }
  }
}

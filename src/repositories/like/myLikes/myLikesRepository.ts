import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import { IMyLikesRepository } from "../../../controllers/like/myLikes/protocols";
import { ILikeModel } from "../../../models/iLikeModel";

const prisma = new PrismaClient();

export class MyLikesRepository implements IMyLikesRepository {
  async getMyLikes(id_user: string): Promise<ILikeModel[]> {
    try {
      const myLikes = await prisma.likes.findMany({
        where: {
          id_user: id_user,
        },
      });

      return myLikes;
    } finally {
      await prisma.$disconnect();
    }
  }
}

import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import { IGetLikesRepository } from "../../../controllers/like/getLikes/protocols";
import { ILikeModel } from "../../../models/iLikeModel";

const prisma = new PrismaClient();

export class GetLikesRepository implements IGetLikesRepository {
  async getLikes(): Promise<ILikeModel[]> {
    try {
      const likes: ILikeModel[] = await prisma.likes.findMany();
      return likes;
    } finally {
      await prisma.$disconnect();
    }
  }
}

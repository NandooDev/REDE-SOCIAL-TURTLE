import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import { IMyPostsRepository } from "../../../controllers/post/myPosts/protocols";
import { IPostModel } from "../../../models/iPostModel";

const prisma = new PrismaClient();

export class MyPostsRepository implements IMyPostsRepository {
  async getMyPosts(id_user: string): Promise<IPostModel[]> {
    try {
      const myPosts = await prisma.posts.findMany({
        where: {
          id_user: id_user,
        },
      });

      return myPosts;
    } finally {
      await prisma.$disconnect();
    }
  }
}

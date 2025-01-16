import { IPostModel } from "../../../models/iPostModel";
import { IGetPostsRepository } from "../../../controllers/post/getPost/protocols";
import { PrismaClient } from "../../../../node_modules/.prisma/client/index";

const prisma = new PrismaClient();

export class GetPostsRepository implements IGetPostsRepository {
  async getPosts(): Promise<IPostModel[]> {
    try {
      const posts: IPostModel[] = await prisma.posts.findMany();
      return posts;
    } finally {
      await prisma.$disconnect();
    }
  }
}

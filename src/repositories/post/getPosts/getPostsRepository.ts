import { IPostModel } from "../../../models/iPostModel";
import { IGetPostsRepository } from "../../../controllers/post/getPost/protocols";
import { PrismaClient } from "../../../../node_modules/.prisma/client/index";

const prisma = new PrismaClient();

export class GetPostsRepository implements IGetPostsRepository {
  async getPosts(): Promise<IPostModel[]> {
    try {
      const posts: IPostModel[] = await prisma.posts.findMany({
        select: {
          id: true,
          title: true,
          content: true,
          attachment: true,
          published: true,
          id_user: true,
          coments: {
            select: {
              content: true,
              id_post: true,
              id_user: true,
            },
          },
        },
      });
      return posts;
    } finally {
      await prisma.$disconnect();
    }
  }
}

import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import { IUpdatePostsPublishedRepository } from "../../../controllers/post/updatePostsPublished/protocols";
import { IPostModel } from "../../../models/iPostModel";

const prisma = new PrismaClient();

export class UpdatePostsPublishedRepository
  implements IUpdatePostsPublishedRepository
{
  async updatePublished(id: string, published: boolean): Promise<IPostModel> {
    try {
      await prisma.posts.update({
        where: { id },
        data: { published },
      });

      const updatedPost = await prisma.posts.findUnique({ where: { id } });

      if (!updatedPost) {
        throw new Error("Post not updated");
      }

      return updatedPost;
    } finally {
      await prisma.$disconnect();
    }
  }
}

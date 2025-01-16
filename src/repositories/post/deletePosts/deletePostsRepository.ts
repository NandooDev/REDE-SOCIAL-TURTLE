import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import { IDeletePostsRepository } from "../../../controllers/post/deletePost/protocols";

const prisma = new PrismaClient();

export class DeletePostsRepository implements IDeletePostsRepository {
  async deletePost(id: string): Promise<string> {
    try {
      const post = await prisma.posts.findUnique({ where: { id } });

      if (!post) {
        throw new Error("Post not exists");
      }

      await prisma.posts.delete({ where: { id } });

      return "Post deleted successfully";
    } finally {
      await prisma.$disconnect();
    }
  }
}

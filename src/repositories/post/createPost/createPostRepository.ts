import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import {
  ICreatePostRepository,
  IPostParams,
} from "../../../controllers/post/createPost/protocols";
import { IPostModel } from "../../../models/iPostModel";

const prisma = new PrismaClient();

export class CreatePostRepository implements ICreatePostRepository {
  async createPost(params: IPostParams): Promise<IPostModel> {
    try {
      const post = await prisma.posts.create({
        data: params,
      });

      if (!post) {
        throw new Error("Post not created");
      }

      return post;
    } finally {
      await prisma.$disconnect();
    }
  }
}

import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
const prisma = new PrismaClient();
export class CreatePostRepository {
    async createPost(params) {
        try {
            const post = await prisma.posts.create({
                data: params,
            });
            if (!post) {
                throw new Error("Post not created");
            }
            return post;
        }
        finally {
            await prisma.$disconnect();
        }
    }
}

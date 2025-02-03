import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
const prisma = new PrismaClient();
export class DeletePostsRepository {
    async deletePost(id) {
        try {
            const post = await prisma.posts.findUnique({ where: { id } });
            if (!post) {
                throw new Error("Post not exists");
            }
            await prisma.posts.delete({ where: { id } });
            return "Post deleted successfully";
        }
        finally {
            await prisma.$disconnect();
        }
    }
}

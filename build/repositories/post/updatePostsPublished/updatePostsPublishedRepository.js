import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
const prisma = new PrismaClient();
export class UpdatePostsPublishedRepository {
    async updatePublished(id, published) {
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
        }
        finally {
            await prisma.$disconnect();
        }
    }
}

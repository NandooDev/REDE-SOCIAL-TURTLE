import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
const prisma = new PrismaClient();
export class MyPostsRepository {
    async getMyPosts(id_user) {
        try {
            const myPosts = await prisma.posts.findMany({
                where: {
                    id_user: id_user,
                },
            });
            return myPosts;
        }
        finally {
            await prisma.$disconnect();
        }
    }
}

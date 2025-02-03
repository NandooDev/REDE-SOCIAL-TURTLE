import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
const prisma = new PrismaClient();
export class CreateLikesRepository {
    async createLike(params) {
        try {
            const like = await prisma.likes.create({
                data: {
                    id_post: params.id_post,
                    id_user: params.id_user,
                },
            });
            return like;
        }
        finally {
            await prisma.$disconnect();
        }
    }
}

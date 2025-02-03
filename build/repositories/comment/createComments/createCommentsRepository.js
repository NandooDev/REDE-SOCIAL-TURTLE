import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
const prisma = new PrismaClient();
export class CreateCommentsRepository {
    async createComment(params) {
        try {
            const comment = await prisma.coments.create({
                data: {
                    content: params.content,
                    id_post: params.id_post,
                    id_user: params.id_user,
                },
            });
            return comment;
        }
        finally {
            await prisma.$disconnect();
        }
    }
}

import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
const prisma = new PrismaClient();
export class DeleteCommentsRepository {
    async deleteComment(id) {
        try {
            const comment = await prisma.coments.findUnique({ where: { id } });
            if (!comment) {
                throw new Error("Comment not exists");
            }
            await prisma.coments.delete({ where: { id } });
            return "Comment deleted successfully";
        }
        finally {
            await prisma.$disconnect();
        }
    }
}

import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
const prisma = new PrismaClient();
export class DeleteLikesRepository {
    async deleteLike(id) {
        try {
            const like = await prisma.likes.findUnique({ where: { id } });
            if (!like) {
                throw new Error("Like not exists");
            }
            await prisma.likes.delete({ where: { id } });
            return "Like deleted successfully";
        }
        finally {
            await prisma.$disconnect();
        }
    }
}

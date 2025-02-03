import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
const prisma = new PrismaClient();
export class GetLikesRepository {
    async getLikes() {
        try {
            const likes = await prisma.likes.findMany();
            return likes;
        }
        finally {
            await prisma.$disconnect();
        }
    }
}

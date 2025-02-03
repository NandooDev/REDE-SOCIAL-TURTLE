import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
const prisma = new PrismaClient();
export class GetCommentsRepository {
    async getComments() {
        try {
            const comments = await prisma.coments.findMany();
            return comments;
        }
        finally {
            await prisma.$disconnect();
        }
    }
}

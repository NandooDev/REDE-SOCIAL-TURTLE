import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
const prisma = new PrismaClient();
export class MyCommentsRepository {
    async getMyComments(id_user) {
        try {
            const myComments = await prisma.coments.findMany({
                where: {
                    id_user: id_user,
                },
            });
            return myComments;
        }
        finally {
            await prisma.$disconnect();
        }
    }
}

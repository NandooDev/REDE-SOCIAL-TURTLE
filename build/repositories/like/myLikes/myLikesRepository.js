import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
const prisma = new PrismaClient();
export class MyLikesRepository {
    async getMyLikes(id_user) {
        try {
            const myLikes = await prisma.likes.findMany({
                where: {
                    id_user: id_user,
                },
            });
            return myLikes;
        }
        finally {
            await prisma.$disconnect();
        }
    }
}

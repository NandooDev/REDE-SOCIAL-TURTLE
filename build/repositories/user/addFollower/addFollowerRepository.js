import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
const prisma = new PrismaClient();
export class AddFollowerRepository {
    async addFollower(username) {
        const addFollower = await prisma.users.update({
            where: {
                username: username,
            },
            data: {
                followers: { increment: 1 },
            },
            select: {
                username: true,
                followers: true,
            },
        });
        return addFollower;
    }
}

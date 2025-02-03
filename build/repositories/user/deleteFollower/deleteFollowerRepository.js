import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
const prisma = new PrismaClient();
export class DeleteFollowerRepository {
    async deleteFollower(username) {
        const deleteFollower = await prisma.users.update({
            where: {
                username: username,
            },
            data: {
                followers: { decrement: 1 },
            },
            select: {
                username: true,
                followers: true,
            },
        });
        return deleteFollower;
    }
}

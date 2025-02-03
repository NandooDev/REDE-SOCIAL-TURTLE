import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
const prisma = new PrismaClient();
export class UpdateUsersRepository {
    async updateUsers(id, params) {
        try {
            await prisma.users.update({
                where: {
                    id: id,
                },
                data: params,
            });
            const user = await prisma.users.findUnique({
                where: {
                    id: id,
                },
            });
            if (!user) {
                throw new Error("User not updated");
            }
            return user;
        }
        finally {
            await prisma.$disconnect();
        }
    }
}

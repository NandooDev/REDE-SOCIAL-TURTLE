import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
const prisma = new PrismaClient();
export class CreateUsersRepository {
    async createUsers(params) {
        try {
            const user = await prisma.users.create({
                data: params,
                select: {
                    id: true,
                    name: true,
                    username: true,
                    email: true,
                },
            });
            if (!user) {
                throw new Error("User not created");
            }
            return user;
        }
        finally {
            await prisma.$disconnect();
        }
    }
}

import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
const prisma = new PrismaClient();
export class GetUsersRepository {
    async getUsers() {
        try {
            const users = await prisma.users.findMany({
                select: {
                    id: true,
                    name: true,
                    username: true,
                    email: true,
                    profile_photo: true,
                    followers: true,
                    bio: true,
                    posts: {
                        select: {
                            id: true,
                            title: true,
                            content: true,
                            attachment: true,
                            published: true,
                        },
                    },
                },
            });
            return users;
        }
        finally {
            await prisma.$disconnect();
        }
    }
}

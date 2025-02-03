import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
const prisma = new PrismaClient();
export class GetUsersByUsernameRepository {
    async getUsersByUsername(username) {
        try {
            const user = await prisma.users.findUnique({
                where: {
                    username: username,
                },
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
            return user;
        }
        finally {
            await prisma.$disconnect();
        }
    }
}

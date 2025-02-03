import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
const prisma = new PrismaClient();
export class DeleteUsersRepository {
    async deleteUsers(id) {
        try {
            // Validar se usuário existe
            const user = await prisma.users.findUnique({
                where: {
                    id: id,
                },
            });
            if (!user) {
                throw new Error("User not exists");
            }
            // Deletar o usuário
            await prisma.users.delete({
                where: {
                    id: id,
                },
            });
            return "User deleted successfully";
        }
        finally {
            await prisma.$disconnect();
        }
    }
}

import { PrismaClient } from "../../../node_modules/.prisma/client/index";
import { generateAcessToken, verifyRefreshToken, } from "../utils/jwtUtils";
const prisma = new PrismaClient();
export class NewAcessToken {
    async newAcessToken(refreshToken) {
        try {
            const verifyRefresh = verifyRefreshToken(refreshToken);
            const user = await prisma.users.findUnique({
                where: {
                    id: verifyRefresh.id,
                },
            });
            if (!user) {
                return "User not found";
            }
            const payload = {
                id: user.id,
                username: user.username,
                role: user.role,
            };
            return generateAcessToken(payload);
        }
        catch (err) {
            console.error("Error generating new access token:", err);
            throw new Error("Invalid Token");
        }
    }
}

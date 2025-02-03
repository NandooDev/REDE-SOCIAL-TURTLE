import bcrypt from "bcrypt";
export class CryptographyPassword {
    async execute(password) {
        const saltRounds = 11;
        try {
            // Gerar salto aleatorio
            const salt = await bcrypt.genSalt(saltRounds);
            const passwordCryptography = await bcrypt.hash(password, salt);
            return passwordCryptography;
        }
        catch (error) {
            throw new Error("Something went wrong during password encryption");
        }
    }
}

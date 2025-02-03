import bcrypt from "bcrypt";
export class VerifyPassword {
    async verify(password, passwordCryptography) {
        try {
            const match = await bcrypt.compare(password, passwordCryptography);
            return match;
        }
        catch (error) {
            console.log(error);
            throw new Error("Something went wrong during verify password");
        }
    }
}

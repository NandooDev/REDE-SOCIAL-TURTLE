import bcrypt from "bcrypt";
import { ICryptographyPassword } from "../controllers/user/createUsers/protocols";

export class CryptographyPassword implements ICryptographyPassword {
  async execute(password: string): Promise<string> {
    const saltRounds: number = 11;

    try {
      // Gerar salto aleatorio
      const salt: string = await bcrypt.genSalt(saltRounds);

      const passwordCryptography = await bcrypt.hash(password, salt);

      return passwordCryptography;
    } catch (error) {
      throw new Error("Something went wrong during password encryption");
    }
  }
}

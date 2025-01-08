import bcrypt from "bcrypt";
import { IVerifyPassword } from "../controllers/user/loginUsers/protocols";

export class VerifyPassword implements IVerifyPassword {
  async verify(
    password: string,
    passwordCryptography: string
  ): Promise<boolean | string> {
    try {
      const match: boolean = await bcrypt.compare(
        password,
        passwordCryptography
      );

      return match;
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong during verify password");
    }
  }
}

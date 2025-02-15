import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import { CryptographyPassword } from "../../../cryptography/cryptographyPassword";
import { ForgotPasswordRepository } from "../../../repositories/user/forgotPassword/forgotPasswordRepository";
import { IHttpRequest, IHttpResponse } from "../../protocols";
import { IForgotPasswordController, IForgotPasswordParams } from "./protocols";

const prisma = new PrismaClient();

export class ForgotPasswordController implements IForgotPasswordController {
  constructor(
    private readonly forgotPasswordRepository: ForgotPasswordRepository,
    private readonly cryptographyPassword: CryptographyPassword
  ) {}
  async handle(
    httpRequest: IHttpRequest<IForgotPasswordParams>
  ): Promise<IHttpResponse<string>> {
    try {
      const { email, newPassword } = httpRequest.body!;

      const cryptographyNewPassword =
        await this.cryptographyPassword.execute(newPassword);

      const userVerify = await prisma.users.findUnique({
        where: {
          email: email,
        },
      });

      if (!userVerify) {
        return {
          statusCode: 400,
          body: "User not registered",
        };
      }

      const response = await this.forgotPasswordRepository.forgotPassword(
        email,
        cryptographyNewPassword
      );

      if (response === "Sucess") {
        return {
          statusCode: 200,
          body: "Password updated successfully",
        };
      }

      return {
        statusCode: 400,
        body: "Error to the update password",
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}

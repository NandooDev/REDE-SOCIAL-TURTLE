import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import { CryptographyPassword } from "../../../cryptography/cryptographyPassword";
import { VerifyPassword } from "../../../cryptography/verifyPassword";
import { ForgotPasswordRepository } from "../../../repositories/user/forgotPassword/forgotPasswordRepository";
import { IHttpRequest, IHttpResponse } from "../../protocols";
import { IForgotPasswordController, IForgotPasswordParams } from "./protocols";

const prisma = new PrismaClient();

export class ForgotPasswordController implements IForgotPasswordController {
  constructor(
    private readonly forgotPasswordRepository: ForgotPasswordRepository,
    private readonly cryptographyPassword: CryptographyPassword,
    private readonly verifyPassword: VerifyPassword
  ) {}
  async handle(
    httpRequest: IHttpRequest<IForgotPasswordParams>
  ): Promise<IHttpResponse<string>> {
    try {
      const { currentPassword, newPassword } = httpRequest.body!;
      const email = httpRequest.params.email;

      const cryptographyCurrentPassword =
        await this.cryptographyPassword.execute(currentPassword);

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

      const passwordUser = await prisma.users.findUnique({
        where: {
          email: email,
        },
        select: {
          password: true,
        },
      });

      const passwordVerify = await this.verifyPassword.verify(
        currentPassword,
        passwordUser!.password!
      );

      if (!passwordVerify) {
        return {
          statusCode: 400,
          body: "Current password is incorrect",
        };
      }
      const response = await this.forgotPasswordRepository.forgotPassword(
        email,
        cryptographyCurrentPassword,
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

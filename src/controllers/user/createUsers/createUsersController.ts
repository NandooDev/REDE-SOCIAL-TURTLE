import validator from "validator";
import { IUserModel } from "../../../models/iUserModel";
import { IHttpRequest, IHttpResponse } from "../../protocols";
import {
  ICreateUsersController,
  ICreateUsersParams,
  ICreateUsersRepository,
  ICryptographyPassword,
} from "./protocols";
import { sendMail } from "../../../services/sendMail";

export class CreateUsersController implements ICreateUsersController {
  constructor(
    private readonly createUsersRepository: ICreateUsersRepository,
    private readonly cryptographyPassword: ICryptographyPassword
  ) {}
  async handle(
    httpRequest: IHttpRequest<ICreateUsersParams>
  ): Promise<IHttpResponse<IUserModel>> {
    try {
      // verificar campos obrigatórios
      const requiredFields = [
        "name",
        "username",
        "email",
        "password",
      ];

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof ICreateUsersParams]?.length) {
          return {
            statusCode: 400,
            body: `Field ${field} is required`,
          };
        }
      }

      //verificar se o email é valido
      const emailIsValid = validator.isEmail(httpRequest.body!.email);

      if (!emailIsValid) {
        return {
          statusCode: 400,
          body: `Email is invalid`,
        };
      }

      const { password, ...userData } = httpRequest.body!;

      //criptografar senha
      const passwordCryptography =
        await this.cryptographyPassword.execute(password);

      const user = await this.createUsersRepository.createUsers({
        ...userData,
        password: passwordCryptography,
      });

      sendMail(user.email, user.username)

      return {
        statusCode: 201,
        body: user,
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

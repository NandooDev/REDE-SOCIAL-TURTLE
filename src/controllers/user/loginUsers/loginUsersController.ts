import validator from "validator";
import { IHttpRequest, IHttpResponse } from "../../protocols";
import {
  ILoginUsersController,
  ILoginUsersRepository,
  IUserParamsLogin,
} from "./protocols";

export class LoginUsersController implements ILoginUsersController {
  constructor(private readonly loginUsersRepository: ILoginUsersRepository) {}
  async handle(
    httpRequest: IHttpRequest<IUserParamsLogin>
  ): Promise<IHttpResponse<boolean>> {
    try {
      //verificar se o email é valido
      const emailIsValid = validator.isEmail(httpRequest.body!.email);

      if (!emailIsValid) {
        return {
          statusCode: 400,
          body: `Email is invalid`,
        };
      }

      const userLogin = await this.loginUsersRepository.loginUsers(
        httpRequest.body!
      );

      if (!userLogin) {
        return {
          statusCode: 401,
          body: "Email ou senha inválidos",
        };
      }

      return {
        statusCode: 201,
        body: true,
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

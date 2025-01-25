import validator from "validator";
import { IHttpRequest, IHttpResponse } from "../../protocols";
import {
  IKeysJwt,
  ILoginUsersController,
  ILoginUsersRepository,
  IUserParamsLogin,
} from "./protocols";
import {
  generateAcessToken,
  generateRefreshToken,
  IPayloadJWT,
} from "../../../auth/utils/jwtUtils";

export class LoginUsersController implements ILoginUsersController {
  constructor(private readonly loginUsersRepository: ILoginUsersRepository) {}
  async handle(
    httpRequest: IHttpRequest<IUserParamsLogin>
  ): Promise<IHttpResponse<IKeysJwt>> {
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

      if (userLogin.login == false) {
        return {
          statusCode: 401,
          body: "Email ou senha inválidos",
        };
      }

      const payload: IPayloadJWT = {
        id: userLogin.id!,
        username: userLogin.username!,
        role: userLogin.role!,
      };

      const acessToken = generateAcessToken(payload);
      const refreshToken = generateRefreshToken(payload.id);

      return {
        statusCode: 201,
        body: { acessToken: acessToken, refreshToken: refreshToken },
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

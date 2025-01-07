import validator from "validator";
import { IUserModel } from "../../../models/iUserModel";
import { IHttpRequest, IHttpResponse } from "../../protocols";
import {
  ICreateUsersController,
  ICreateUsersParams,
  ICreateUsersRepository,
} from "./protocols";

export class CreateUsersController implements ICreateUsersController {
  constructor(private readonly createUsersRepository: ICreateUsersRepository) {}
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
        "position",
        "role",
        "company_code",
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

      const user = await this.createUsersRepository.createUsers(
        httpRequest.body!
      );

      return {
        statusCode: 201,
        body: user,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}

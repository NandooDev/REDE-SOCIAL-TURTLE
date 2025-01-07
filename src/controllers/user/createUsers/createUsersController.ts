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
      // validar se body existe
      if (!httpRequest.body) {
        return {
          statusCode: 400,
          body: "Please specify a body",
        };
      }

      const user = await this.createUsersRepository.createUsers(
        httpRequest.body
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

import { IUserModel } from "../../../models/iUserModel";
import { IHttpRequest, IHttpResponse } from "../../protocols";
import { IUpdateUsersController, IUpdateUsersRepository } from "./protocols";

export class UpdateUsersController implements IUpdateUsersController {
  constructor(private readonly updateUsersRepository: IUpdateUsersRepository) {}
  async handle(
    httpRequest: IHttpRequest<any>
  ): Promise<IHttpResponse<IUserModel>> {
    try {
      const id = httpRequest?.params?.id;

      const body = httpRequest?.body;

      if (!id) {
        return {
          statusCode: 400,
          body: "Missing user id",
        };
      }

      if (body.email) {
        return {
          statusCode: 500,
          body: "Email not is valid",
        };
      }

      const user = await this.updateUsersRepository.updateUsers(id, body);

      return {
        statusCode: 200,
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

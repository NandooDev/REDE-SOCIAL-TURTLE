import { IUserModel } from "../../../models/iUserModel";
import { IHttpRequest, IHttpResponse } from "../../protocols";
import {
  IGetUsersByUsernameController,
  IGetUsersByUsernameRepository,
} from "./protocols";

export class GetUsersByUsernameController
  implements IGetUsersByUsernameController
{
  constructor(
    private readonly getUsersByUsernameRepository: IGetUsersByUsernameRepository
  ) {}
  async handle(
    httpRequest: IHttpRequest<IUserModel>
  ): Promise<IHttpResponse<IUserModel>> {
    try {
      const username = httpRequest.body!.username;

      if (!username) {
        return {
          statusCode: 400,
          body: "Username is required",
        };
      }

      const user =
        await this.getUsersByUsernameRepository.getUsersByUsername(username);

      if (!user) {
        return {
          statusCode: 404,
          body: "User not found",
        };
      }

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

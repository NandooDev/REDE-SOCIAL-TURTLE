import { IUserModel } from "../../../models/iUserModel";
import { IHttpRequest, IHttpResponse } from "../../protocols";
import { IAddFollowerController, IAddFollowerRepository } from "./protocols";

export class AddFollowerController implements IAddFollowerController {
  constructor(private readonly addFollowerRepository: IAddFollowerRepository) {}
  async handle(
    httpRequest: IHttpRequest<any>
  ): Promise<IHttpResponse<IUserModel>> {
    try {
      const username = httpRequest.body.username;

      const userAddFollower =
        await this.addFollowerRepository.addFollower(username);

      return {
        statusCode: 200,
        body: userAddFollower,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Somenthing went wrong",
      };
    }
  }
}

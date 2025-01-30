import { IUserModel } from "../../../models/iUserModel";
import { IHttpRequest, IHttpResponse } from "../../protocols";
import { IDeleteFollowerController, IDeleteFollowerRepository } from "./protocols";

export class DeleteFollowerController implements IDeleteFollowerController {
  constructor(private readonly deleteFollowerRepository: IDeleteFollowerRepository) {}
  async handle(
    httpRequest: IHttpRequest<any>
  ): Promise<IHttpResponse<IUserModel>> {
    try {
      const username = httpRequest.body.username;

      const userDeleteFollower =
        await this.deleteFollowerRepository.deleteFollower(username);

      return {
        statusCode: 200,
        body: userDeleteFollower,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Somenthing went wrong",
      };
    }
  }
}

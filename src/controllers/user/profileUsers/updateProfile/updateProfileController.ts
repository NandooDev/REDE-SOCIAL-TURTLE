import { IProfileModel } from "../../../../models/iProfileModel";
import { IHttpRequest, IHttpResponse } from "../../../protocols";
import { IUpdateProfileController, IUpdateProfileRepository } from "./protocols";

export class UpdateProfileController implements IUpdateProfileController {
  constructor(private readonly updateProfileRepository: IUpdateProfileRepository) {}
  async handle(
    httpRequest: IHttpRequest<any>
  ): Promise<IHttpResponse<IProfileModel>> {
    try {
      const body = httpRequest?.body;

      if (!body.id_user) {
        return {
          statusCode: 400,
          body: "Missing user id",
        };
      }

      const user = await this.updateProfileRepository.updateProfile(body);

      return {
        statusCode: 200,
        body: user,
      };
    } catch (error) {
        console.log(error)
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}

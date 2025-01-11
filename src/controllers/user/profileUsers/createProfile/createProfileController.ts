import { IProfileModel } from "../../../../models/iProfileModel";
import { IHttpRequest, IHttpResponse } from "../../../protocols";
import {
  ICreateProfileController,
  ICreateProfileRepository,
} from "./protocols";

export class CreateProfileController implements ICreateProfileController {
  constructor(
    private readonly createProfileRepository: ICreateProfileRepository
  ) {}
  async handle(
    httpRequest: IHttpRequest<IProfileModel>
  ): Promise<IHttpResponse<IProfileModel>> {
    try {
      const profile = await this.createProfileRepository.createProfile(
        httpRequest.body!
      );

      return {
        statusCode: 201,
        body: profile,
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

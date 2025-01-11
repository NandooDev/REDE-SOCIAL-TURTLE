import { IProfileModel } from "../../../../models/iProfileModel";
import { IHttpRequest, IHttpResponse } from "../../../protocols";

export interface ICreateProfileController {
  handle(
    httpRequest: IHttpRequest<IProfileModel>
  ): Promise<IHttpResponse<IProfileModel>>;
}

export interface IParamsProfile {
  bio: string;
  id_user: string;
}

export interface ICreateProfileRepository {
  createProfile(params: IParamsProfile): Promise<IProfileModel>;
}

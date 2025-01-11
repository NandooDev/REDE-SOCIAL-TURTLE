import { IProfileModel } from "../../../../models/iProfileModel";
import { IHttpRequest, IHttpResponse } from "../../../protocols";

export interface IProfileController {
  handle(
    httpRequest: IHttpRequest<IProfileModel>
  ): Promise<IHttpResponse<IProfileModel>>;
}

export interface IParamsProfile {
  bio: string;
  id_user: string;
}

export interface IProfileRepository {
  createProfile(params: IParamsProfile): Promise<IProfileModel>;
}

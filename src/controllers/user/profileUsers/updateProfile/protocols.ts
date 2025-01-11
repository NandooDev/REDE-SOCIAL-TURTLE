import { IProfileModel } from "../../../../models/iProfileModel";
import { IHttpRequest, IHttpResponse } from "../../../protocols";

export interface IUpdateProfileParams {
  bio: string,
  id_user: string
}

export interface IUpdateProfileController {
  handle(httpRequest: IHttpRequest<any>): Promise<IHttpResponse<IProfileModel>>;
}

export interface IUpdateProfileRepository {
  updateProfile(params: IUpdateProfileParams): Promise<IProfileModel>;
}

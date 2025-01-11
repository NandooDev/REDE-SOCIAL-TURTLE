import { IProfileModel } from "../../../../models/iProfileModel";
import { IHttpResponse } from "../../../protocols";

export interface IGetProfilesController {
  handle(): Promise<IHttpResponse<IProfileModel[]>>;
}

export interface IGetProfilesRepository {
  getProfiles(): Promise<IProfileModel[]>;
}

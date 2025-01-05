import { ERole } from "./eRole";
import { IComentModel } from "./iComentModel";
import { IPostModel } from "./iPostModel";

export interface IUserModel {
  id?: string;
  name: string;
  email: string;
  password: string;
  position: string;
  role: ERole;
  company_code: string;
  profile_photo?: string;
  created_at?: string;
  updated_at?: string;
  posts?: IPostModel[];
  coments?: IComentModel[];
}

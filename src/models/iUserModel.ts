import { ERole } from "./eRole";
import { IComentModel } from "./iComentModel";
import { IPostModel } from "./iPostModel";

export interface IUserModel {
  id?: string;
  name: string;
  username: string;
  email: string;
  password: string;
  position: string;
  role: ERole;
  company_code: string;
  profile_photo?: string;
  created_at?: Date;
  updated_at?: Date;
  posts?: IPostModel[];
  coments?: IComentModel[];
}

export interface IUserModel {
  username: string;
  name: string;
  email: string;
  password: string;
  cargo: string;
  profile_photo?: string;
  role: "admin" | "user";
  company_code: string;
}

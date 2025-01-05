import { ECompanySector } from "./eCompanySector";

export interface ICompanyModel {
  id?: string;
  name: string;
  cnpj: string;
  adress: string;
  sector: ECompanySector;
  company_code: string;
}

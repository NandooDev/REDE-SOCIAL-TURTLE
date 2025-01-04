import { ECompanySector } from "./eCompanySector";

export interface ICompanyModel {
  name: string;
  cnpj: string;
  adress: string;
  sector: ECompanySector;
}

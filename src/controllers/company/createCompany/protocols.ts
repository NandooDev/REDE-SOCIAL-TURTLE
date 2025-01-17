import { ECompanySector } from "../../../models/eCompanySector";
import { ICompanyModel } from "../../../models/iCompanyModel";
import { IHttpRequest, IHttpResponse } from "../../protocols";

export interface IParamsCompany {
  name: string;
  cnpj: string;
  adress: string;
  sector: ECompanySector;
}

export interface ICreateCompanyRepository {
  createCompany(params: IParamsCompany): Promise<ICompanyModel>;
}

export interface ICreateCompanyController {
  handle(
    httpRequest: IHttpRequest<IParamsCompany>
  ): Promise<IHttpResponse<ICompanyModel>>;
}

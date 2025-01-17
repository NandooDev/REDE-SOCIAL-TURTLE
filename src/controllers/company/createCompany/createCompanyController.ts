import {
  ICreateCompanyController,
  ICreateCompanyRepository,
  IParamsCompany,
} from "./protocols";
import { IHttpRequest, IHttpResponse } from "../../protocols";
import { ICompanyModel } from "../../../models/iCompanyModel";

export class CreateCompanyController implements ICreateCompanyController {
  constructor(
    private readonly createCompanyRepository: ICreateCompanyRepository
  ) {}

  async handle(
    httpRequest: IHttpRequest<ICompanyModel>
  ): Promise<IHttpResponse<ICompanyModel>> {
    try {
      const body = httpRequest.body!;

      // verificar campos obrigatórios
      const requiredFields = [
        "name",
        "cnpj",
        "adress",
        "sector",
      ];

      for (const field of requiredFields) {
        if (!httpRequest.body![field as keyof IParamsCompany]) {
          return {
            statusCode: 400,
            body: `Field ${field} is required`,
          };
        }
      }

      const company = await this.createCompanyRepository.createCompany(body);

      return {
        statusCode: 201,
        body: company,
      };
    } catch (error) {
        console.log(error)
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}

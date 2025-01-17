import { ICompanyModel } from "../../../models/iCompanyModel";
import { PrismaClient } from "../../../../node_modules/.prisma/client/index";
import {
  ICreateCompanyRepository,
  IParamsCompany,
} from "../../../controllers/company/createCompany/protocols";
import { generateCompanyCode } from "../../../generateCompanyCode/generateCompanyCode";

const prisma = new PrismaClient();

export class CreateCompanyRepository implements ICreateCompanyRepository {
  async createCompany(params: IParamsCompany): Promise<ICompanyModel> {
    try {
      // gerar company_code
      let company_code: string = "";

      while (true) {
        company_code += generateCompanyCode();

        const company = await prisma.companys.findFirst({
          where: {
            company_code: company_code,
          },
        });
        
        if (company) {
          continue;
        } else {
          break;
        }
      }
      
      const company = await prisma.companys.create({
        data: {
          name: params.name,
          cnpj: params.cnpj,
          adress: params.adress,
          sector: params.sector,
          company_code: company_code,
        },
      });

      return company;
    } finally {
      await prisma.$disconnect();
    }
  }
}

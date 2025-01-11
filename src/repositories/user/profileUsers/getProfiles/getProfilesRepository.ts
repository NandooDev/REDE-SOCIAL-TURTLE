import { PrismaClient } from "../../../../../node_modules/.prisma/client/index";
import { IGetProfilesRepository } from "../../../../controllers/user/profileUsers/getProfiles/protocols";
import { IProfileModel } from "../../../../models/iProfileModel";

const prisma = new PrismaClient();

export class GetProfilesRepository implements IGetProfilesRepository {
  async getProfiles(): Promise<IProfileModel[]> {
    try {
      const profiles: IProfileModel = await prisma.profile.findMany();
      return profiles;
    } finally {
      await prisma.$disconnect();
    }
  }
}

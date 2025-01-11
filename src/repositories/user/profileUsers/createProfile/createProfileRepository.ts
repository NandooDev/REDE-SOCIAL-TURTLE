import { PrismaClient } from "../../../../../node_modules/.prisma/client/index";
import {
  IParamsProfile,
  IProfileRepository,
} from "../../../../controllers/user/profileUsers/createProfile/protocols";
import { IProfileModel } from "../../../../models/iProfileModel";

const prisma = new PrismaClient();

export class CreateProfile implements IProfileRepository {
  async createProfile(params: IParamsProfile): Promise<IProfileModel> {
    try {
      const profile = await prisma.profile.create({
        data: {
          bio: params.bio,
          id_user: params.id_user,
        },
      });

      return profile;
    } finally {
      await prisma.$disconnect();
    }
  }
}

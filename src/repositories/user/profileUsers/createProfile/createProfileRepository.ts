import { PrismaClient } from "../../../../../node_modules/.prisma/client/index";
import {
  IParamsProfile,
  ICreateProfileRepository,
} from "../../../../controllers/user/profileUsers/createProfile/protocols";
import { IProfileModel } from "../../../../models/iProfileModel";

const prisma = new PrismaClient();

export class CreateProfileRepository implements ICreateProfileRepository {
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

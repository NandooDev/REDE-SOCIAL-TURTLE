import { PrismaClient } from "../../../../../node_modules/.prisma/client/index";
import {
  IUpdateProfileParams,
  IUpdateProfileRepository,
} from "../../../../controllers/user/profileUsers/updateProfile/protocols";
import { IProfileModel } from "../../../../models/iProfileModel";

const prisma = new PrismaClient();

export class UpdateProfileRepository implements IUpdateProfileRepository {
  async updateProfile(params: IUpdateProfileParams): Promise<IProfileModel> {
    try {
      const profile = await prisma.profile.update({
        where: {
          id_user: params.id_user,
        },
        data: {
          bio: params.bio,
        },
      });

      return profile;
    } finally {
      await prisma.$disconnect();
    }
  }
}

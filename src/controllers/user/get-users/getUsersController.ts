import { IGetProfilesController, IGetProfilesRepository } from "../profileUsers/getProfiles/protocols";

export class GetUsersController implements IGetProfilesController {
  constructor(private readonly getUsersRepository: IGetProfilesRepository) {}

  async handle() {
    try {
      // validar requisição
      // direcionar chamada para repository
      const profiles = await this.getUsersRepository.getProfiles();

      return {
        statusCode: 200,
        body: profiles,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}

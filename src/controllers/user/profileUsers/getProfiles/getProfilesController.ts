import { IGetProfilesController, IGetProfilesRepository } from "./protocols";

export class GetProfilesController implements IGetProfilesController {
  constructor(private readonly getProfilesRepository: IGetProfilesRepository) {}

  async handle() {
    try {
      // validar requisição
      // direcionar chamada para repository
      const profiles = await this.getProfilesRepository.getProfiles();

      return {
        statusCode: 200,
        body: profiles,
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}

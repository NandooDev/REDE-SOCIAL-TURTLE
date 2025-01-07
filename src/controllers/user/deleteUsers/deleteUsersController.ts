import { IHttpRequest, IHttpResponse } from "../../protocols";
import { IDeleteUsersController, IDeleteUsersRepository } from "./protocols";

export class DeleteUsersController implements IDeleteUsersController {
  constructor(private readonly deleteUsersRepository: IDeleteUsersRepository) {}
  async handle(httpRequest: IHttpRequest<any>): Promise<IHttpResponse<string>> {
    try {
      await this.deleteUsersRepository.deleteUsers(httpRequest.params?.id);

      return {
        statusCode: 200,
        body: "User deleted successfully",
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}

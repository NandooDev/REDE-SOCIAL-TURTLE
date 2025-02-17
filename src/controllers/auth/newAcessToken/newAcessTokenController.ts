import { IHttpRequest, IHttpResponse } from "../../protocols";
import { IAuthController, INewAcessToken } from "./protocols";

export class NewAcessTokenController implements IAuthController {
  constructor(private readonly newAcessToken: INewAcessToken) {}
  async handle(httpRequest: IHttpRequest<any>): Promise<IHttpResponse<string>> {
    try {
      const { refreshToken } = httpRequest.body;

      if (!refreshToken) {
        return {
          statusCode: 401,
          body: "Refresh Token is required",
        };
      }

      const newAcessToken =
        await this.newAcessToken.newAcessToken(refreshToken);

      if (newAcessToken === "User not found") {
        return {
          statusCode: 401,
          body: "User not found",
        };
      }

      return {
        statusCode: 200,
        body: newAcessToken,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}

export class NewAcessTokenController {
    newAcessToken;
    constructor(newAcessToken) {
        this.newAcessToken = newAcessToken;
    }
    async handle(httpRequest) {
        try {
            const { refreshToken } = httpRequest.body;
            if (!refreshToken) {
                return {
                    statusCode: 401,
                    body: "Refresh Token is required",
                };
            }
            const newAcessToken = await this.newAcessToken.newAcessToken(refreshToken);
            return {
                statusCode: 200,
                body: newAcessToken,
            };
        }
        catch (error) {
            return {
                statusCode: 500,
                body: "Something went wrong",
            };
        }
    }
}

export class GetUsersByUsernameController {
    getUsersByUsernameRepository;
    constructor(getUsersByUsernameRepository) {
        this.getUsersByUsernameRepository = getUsersByUsernameRepository;
    }
    async handle(httpRequest) {
        try {
            const username = httpRequest.body.username;
            if (!username) {
                return {
                    statusCode: 400,
                    body: "Username is required",
                };
            }
            const user = await this.getUsersByUsernameRepository.getUsersByUsername(username);
            if (!user) {
                return {
                    statusCode: 404,
                    body: "User not found",
                };
            }
            return {
                statusCode: 201,
                body: user,
            };
        }
        catch (error) {
            console.log(error);
            return {
                statusCode: 500,
                body: "Something went wrong",
            };
        }
    }
}

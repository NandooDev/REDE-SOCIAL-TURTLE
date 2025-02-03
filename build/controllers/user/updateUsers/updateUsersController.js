export class UpdateUsersController {
    updateUsersRepository;
    constructor(updateUsersRepository) {
        this.updateUsersRepository = updateUsersRepository;
    }
    async handle(httpRequest) {
        try {
            const id = httpRequest?.params?.id;
            const body = httpRequest?.body;
            if (!id) {
                return {
                    statusCode: 400,
                    body: "Missing user id",
                };
            }
            if (body.email) {
                return {
                    statusCode: 500,
                    body: "Email not is valid",
                };
            }
            const user = await this.updateUsersRepository.updateUsers(id, body);
            return {
                statusCode: 200,
                body: user,
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

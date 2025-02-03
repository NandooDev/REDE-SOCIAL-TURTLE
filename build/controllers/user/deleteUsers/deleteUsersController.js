export class DeleteUsersController {
    deleteUsersRepository;
    constructor(deleteUsersRepository) {
        this.deleteUsersRepository = deleteUsersRepository;
    }
    async handle(httpRequest) {
        try {
            await this.deleteUsersRepository.deleteUsers(httpRequest.params?.id);
            return {
                statusCode: 200,
                body: "User deleted successfully",
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

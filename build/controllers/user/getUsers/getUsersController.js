export class GetUsersController {
    getUsersRepository;
    constructor(getUsersRepository) {
        this.getUsersRepository = getUsersRepository;
    }
    async handle() {
        try {
            // validar requisição
            // direcionar chamada para repository
            const users = await this.getUsersRepository.getUsers();
            return {
                statusCode: 200,
                body: users,
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

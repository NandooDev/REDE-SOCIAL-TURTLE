export class DeleteFollowerController {
    deleteFollowerRepository;
    constructor(deleteFollowerRepository) {
        this.deleteFollowerRepository = deleteFollowerRepository;
    }
    async handle(httpRequest) {
        try {
            const username = httpRequest.body.username;
            const userDeleteFollower = await this.deleteFollowerRepository.deleteFollower(username);
            return {
                statusCode: 200,
                body: userDeleteFollower,
            };
        }
        catch (error) {
            return {
                statusCode: 500,
                body: "Somenthing went wrong",
            };
        }
    }
}

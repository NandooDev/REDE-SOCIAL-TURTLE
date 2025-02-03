export class AddFollowerController {
    addFollowerRepository;
    constructor(addFollowerRepository) {
        this.addFollowerRepository = addFollowerRepository;
    }
    async handle(httpRequest) {
        try {
            const username = httpRequest.body.username;
            const userAddFollower = await this.addFollowerRepository.addFollower(username);
            return {
                statusCode: 200,
                body: userAddFollower,
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

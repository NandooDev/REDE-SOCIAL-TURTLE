export class GetCommentsController {
    getCommentsRepository;
    constructor(getCommentsRepository) {
        this.getCommentsRepository = getCommentsRepository;
    }
    async handle() {
        try {
            const comments = await this.getCommentsRepository.getComments();
            return {
                statusCode: 200,
                body: comments,
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

export class MyCommentsController {
    myCommentsRepository;
    constructor(myCommentsRepository) {
        this.myCommentsRepository = myCommentsRepository;
    }
    async handle(httpRequest) {
        try {
            const { id_user } = httpRequest.body;
            const myComments = await this.myCommentsRepository.getMyComments(id_user);
            return {
                statusCode: 200,
                body: myComments,
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

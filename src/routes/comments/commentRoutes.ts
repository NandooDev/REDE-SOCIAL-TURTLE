import { Router } from "express";
import { GetCommentsRepository } from "../../repositories/comment/getComments/getCommentsRepository";
import { GetCommentsController } from "../../controllers/comment/getComments/getCommentsController";

const commentRoutes = Router();

commentRoutes.get("/", async (req, res) => {
  const getCommentsRepository = new GetCommentsRepository();

  const getCommentsController = new GetCommentsController(
    getCommentsRepository
  );

  const { body, statusCode } = await getCommentsController.handle();

  res.status(statusCode).send(body);
});

export { commentRoutes };

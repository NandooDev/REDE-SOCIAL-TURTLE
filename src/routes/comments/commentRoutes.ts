import { Router } from "express";
import { GetCommentsRepository } from "../../repositories/comment/getComments/getCommentsRepository";
import { GetCommentsController } from "../../controllers/comment/getComments/getCommentsController";
import { CreateCommentsRepository } from "../../repositories/comment/createComments/createCommentsRepository";
import { CreateCommentsController } from "../../controllers/comment/createComments/createCommentsController";

const commentRoutes = Router();

commentRoutes.get("/", async (req, res) => {
  const getCommentsRepository = new GetCommentsRepository();

  const getCommentsController = new GetCommentsController(
    getCommentsRepository
  );

  const { body, statusCode } = await getCommentsController.handle();

  res.status(statusCode).send(body);
});

commentRoutes.post("/create", async (req, res) => {
  const createCommentsRepository = new CreateCommentsRepository();

  const createCommentsController = new CreateCommentsController(
    createCommentsRepository
  );

  const { body, statusCode } = await createCommentsController.handle({
    body: req.body,
  });

  res.status(statusCode).send(body);
});

export { commentRoutes };

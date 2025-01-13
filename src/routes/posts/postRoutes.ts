import { Router } from "express";
import { CreatePostRepository } from "../../repositories/post/createPost/createPostRepository";
import { CreatePostController } from "../../controllers/post/createPost/createPostController";

const postRoutes = Router();

postRoutes.post("/create", async (req, res) => {
  const createPostRepository = new CreatePostRepository();

  const createPostController = new CreatePostController(createPostRepository);

  const { body, statusCode } = await createPostController.handle({
    body: req.body,
  });

  res.status(statusCode).send(body);
});

export { postRoutes };

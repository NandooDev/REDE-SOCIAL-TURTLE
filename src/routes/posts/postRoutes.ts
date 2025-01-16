import { Router } from "express";
import { CreatePostRepository } from "../../repositories/post/createPost/createPostRepository";
import { CreatePostController } from "../../controllers/post/createPost/createPostController";
import { GetPostsRepository } from "../../repositories/post/getPosts/getPostsRepository";
import { GetPostsController } from "../../controllers/post/getPost/getPostsController";
import { UpdatePostsPublishedRepository } from "../../repositories/post/updatePostsPublished/updatePostsPublishedRepository";
import { UpdatePostsPublishedController } from "../../controllers/post/updatePostsPublished/updatePostsPublishedController";

const postRoutes = Router();

postRoutes.get("/", async (req, res) => {
  const getPostsRepository = new GetPostsRepository();

  const getPostsController = new GetPostsController(getPostsRepository);

  const { body, statusCode } = await getPostsController.handle();

  res.status(statusCode).send(body);
});

postRoutes.post("/create", async (req, res) => {
  const createPostRepository = new CreatePostRepository();

  const createPostController = new CreatePostController(createPostRepository);

  const { body, statusCode } = await createPostController.handle({
    body: req.body,
  });

  res.status(statusCode).send(body);
});

export { postRoutes };

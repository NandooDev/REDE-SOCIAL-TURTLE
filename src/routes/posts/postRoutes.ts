import { Router } from "express";
import { CreatePostRepository } from "../../repositories/post/createPost/createPostRepository";
import { CreatePostController } from "../../controllers/post/createPost/createPostController";
import { GetPostsRepository } from "../../repositories/post/getPosts/getPostsRepository";
import { GetPostsController } from "../../controllers/post/getPost/getPostsController";
import { UpdatePostsPublishedRepository } from "../../repositories/post/updatePostsPublished/updatePostsPublishedRepository";
import { UpdatePostsPublishedController } from "../../controllers/post/updatePostsPublished/updatePostsPublishedController";
import { DeletePostsRepository } from "../../repositories/post/deletePosts/deletePostsRepository";
import { DeletePostsController } from "../../controllers/post/deletePost/deletePostsController";

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

postRoutes.patch("/update/:id", async (req, res) => {
  const updatePostsPublishedRepository = new UpdatePostsPublishedRepository();

  const updatePostsPublishedController = new UpdatePostsPublishedController(
    updatePostsPublishedRepository
  );

  const { body, statusCode } = await updatePostsPublishedController.handle({
    params: req.params,
    body: req.body,
  });

  res.status(statusCode).send(body);
});

postRoutes.delete("/delete/:id", async (req, res) => {
  const deletePostsRepository = new DeletePostsRepository()
   
  const deletePostsController = new DeletePostsController(deletePostsRepository)

  const { body, statusCode } = await deletePostsController.handle({
    params: req.params
  });

  res.status(statusCode).send(body);
});

export { postRoutes };

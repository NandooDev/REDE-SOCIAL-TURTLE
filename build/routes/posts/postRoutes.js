import { Router } from "express";
import { CreatePostRepository } from "../../repositories/post/createPost/createPostRepository";
import { CreatePostController } from "../../controllers/post/createPost/createPostController";
import { GetPostsRepository } from "../../repositories/post/getPosts/getPostsRepository";
import { GetPostsController } from "../../controllers/post/getPost/getPostsController";
import { UpdatePostsPublishedRepository } from "../../repositories/post/updatePostsPublished/updatePostsPublishedRepository";
import { UpdatePostsPublishedController } from "../../controllers/post/updatePostsPublished/updatePostsPublishedController";
import { DeletePostsRepository } from "../../repositories/post/deletePosts/deletePostsRepository";
import { DeletePostsController } from "../../controllers/post/deletePost/deletePostsController";
import { MyPostsRepository } from "../../repositories/post/myPosts/myPostsRepository";
import { MyPostsController } from "../../controllers/post/myPosts/myPostsController";
import { AuthenticateToken } from "../../auth/authenticateToken/authenticateToken";
import bodyParser from "body-parser";
import multer from "multer";
import { storage } from "../../services/multerConfig";
const postRoutes = Router();
postRoutes.use(bodyParser.json());
const upload = multer({ storage: storage });
const authenticateToken = new AuthenticateToken();
postRoutes.get("/", async (req, res) => {
    const getPostsRepository = new GetPostsRepository();
    const getPostsController = new GetPostsController(getPostsRepository);
    const { body, statusCode } = await getPostsController.handle();
    res.status(statusCode).send(body);
});
postRoutes.post("/create", authenticateToken.authenticateToken, upload.single("file"), async (req, res) => {
    const createPostRepository = new CreatePostRepository();
    const createPostController = new CreatePostController(createPostRepository);
    if (req.file) {
        req.body.attachment = `http://localhost:3000/files/${req.file.filename}`;
    }
    if (req.body.published === "true") {
        req.body.published = true;
    }
    else if (req.body.published === "false") {
        req.body.published = false;
    }
    const { body, statusCode } = await createPostController.handle({
        body: req.body,
    });
    res.status(statusCode).send(body);
});
postRoutes.patch("/update/:id", authenticateToken.authenticateToken, async (req, res) => {
    const updatePostsPublishedRepository = new UpdatePostsPublishedRepository();
    const updatePostsPublishedController = new UpdatePostsPublishedController(updatePostsPublishedRepository);
    const { body, statusCode } = await updatePostsPublishedController.handle({
        params: req.params,
        body: req.body,
    });
    res.status(statusCode).send(body);
});
postRoutes.delete("/delete/:id", authenticateToken.authenticateToken, async (req, res) => {
    const deletePostsRepository = new DeletePostsRepository();
    const deletePostsController = new DeletePostsController(deletePostsRepository);
    const { body, statusCode } = await deletePostsController.handle({
        params: req.params,
    });
    res.status(statusCode).send(body);
});
postRoutes.get("/myPosts", async (req, res) => {
    const myPostsRepository = new MyPostsRepository();
    const myPostsController = new MyPostsController(myPostsRepository);
    const { body, statusCode } = await myPostsController.handle({
        body: req.body,
    });
    res.status(statusCode).send(body);
});
export { postRoutes };

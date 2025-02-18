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
import sharp from "../../../node_modules/sharp/lib/index";
import path from "path";
import fs from "fs";

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

postRoutes.post(
  "/create",
  authenticateToken.authenticateToken,
  upload.single("file"),
  async (req, res) => {
    const createPostRepository = new CreatePostRepository();
    const createPostController = new CreatePostController(createPostRepository);

    if (req.file) {
      try {
        console.log("Arquivo recebido:", req.file); 

        const resizedFilename = `resized-${Date.now()}.jpg`;
        const outputPath = path.join(__dirname, "../../../uploads", resizedFilename);

        await sharp(req.file.path)
          .resize({ width: 400, height: 400 })
          .toFormat("jpeg")
          .jpeg({ quality: 100 })
          .toFile(outputPath);

        // Remove o arquivo original após o processamento
        fs.unlink(req.file.path, (err) => {
          if (err) {
            console.error('Erro ao excluir o arquivo:', err);
          } else {
            console.log('Arquivo excluído com sucesso!');
          }
        });

        // Define o caminho da imagem redimensionada no corpo da requisição
        req.body.attachment = `http://localhost:3000/files/${resizedFilename}`;
      } catch (error) {
        console.error("Erro ao processar a imagem:", error);
        return res.status(500).json({ error: "Erro ao processar a imagem" });
      }
    }

    // Converte published para booleano
    req.body.published = req.body.published === "true";

    // Chama o controller
    const { body, statusCode } = await createPostController.handle({
      body: req.body,
    });

    res.status(statusCode).send(body);
  }
);

postRoutes.patch(
  "/update/:id",
  authenticateToken.authenticateToken,
  async (req, res) => {
    const updatePostsPublishedRepository = new UpdatePostsPublishedRepository();

    const updatePostsPublishedController = new UpdatePostsPublishedController(
      updatePostsPublishedRepository
    );

    const { body, statusCode } = await updatePostsPublishedController.handle({
      params: req.params,
      body: req.body,
    });

    res.status(statusCode).send(body);
  }
);

postRoutes.delete(
  "/delete/:id",
  authenticateToken.authenticateToken,
  async (req, res) => {
    const deletePostsRepository = new DeletePostsRepository();

    const deletePostsController = new DeletePostsController(
      deletePostsRepository
    );

    const { body, statusCode } = await deletePostsController.handle({
      params: req.params,
    });

    res.status(statusCode).send(body);
  }
);

postRoutes.get("/myPosts", async (req, res) => {
  const myPostsRepository = new MyPostsRepository();

  const myPostsController = new MyPostsController(myPostsRepository);

  const { body, statusCode } = await myPostsController.handle({
    body: req.body,
  });

  res.status(statusCode).send(body);
});

export { postRoutes };

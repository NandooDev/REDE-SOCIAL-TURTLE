import { Router } from "express";
import { userRoutes } from "./users/usersRoutes";
import { postRoutes } from "./posts/postRoutes";
import { commentRoutes } from "./comments/commentRoutes";
import { likeRoutes } from "./likes/likeRoutes";

const routes: Router = Router();

routes.use("/users", userRoutes);
routes.use("/posts", postRoutes);
routes.use("/comments", commentRoutes);
routes.use("/likes", likeRoutes);

export { routes };

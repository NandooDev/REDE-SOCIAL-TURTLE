import { Router } from "express";
import { userRoutes } from "./users/usersRoutes";
import { profileRoutes } from "./users/profileRoutes";
import { postRoutes } from "./posts/postRoutes";
import { commentRoutes } from "./comments/commentRoutes";
import { likeRoutes } from "./likes/likeRoutes";
import { companyRoutes } from "./companys/companyRoutes";

const routes: Router = Router();

routes.use("/users", userRoutes);
routes.use("/profiles", profileRoutes);
routes.use("/posts", postRoutes);
routes.use("/comments", commentRoutes);
routes.use("/likes", likeRoutes);
routes.use("/companys", companyRoutes)

export { routes };

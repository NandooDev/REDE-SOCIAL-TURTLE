import { Router } from "express";
import { CreateProfileRepository } from "../../repositories/user/profileUsers/createProfile/createProfileRepository";
import { CreateProfileController } from "../../controllers/user/profileUsers/createProfile/createProfileController";

const profileRoutes: Router = Router();

profileRoutes.post("/create", async (req, res) => {
  const createProfileRepository = new CreateProfileRepository();

  const createProfileController = new CreateProfileController(
    createProfileRepository
  );

  const { body, statusCode } = await createProfileController.handle({
    body: req.body,
  });

  res.status(statusCode).send(body);
});

export { profileRoutes };

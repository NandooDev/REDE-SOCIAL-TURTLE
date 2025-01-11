import { Router } from "express";
import { GetProfilesController } from "../../controllers/user/profileUsers/getProfiles/getProfilesController";
import { GetProfilesRepository } from "../../repositories/user/profileUsers/getProfiles/getProfilesRepository";
import { CreateProfileRepository } from "../../repositories/user/profileUsers/createProfile/createProfileRepository";
import { CreateProfileController } from "../../controllers/user/profileUsers/createProfile/createProfileController";
import { UpdateProfileRepository } from "../../repositories/user/profileUsers/updateProfile/updateProfileRepository";
import { UpdateProfileController } from "../../controllers/user/profileUsers/updateProfile/updateProfileController";

const profileRoutes: Router = Router();

profileRoutes.get("/", async (req, res) => {
  const getProfilesRepository = new GetProfilesRepository();

  const getProfilesController = new GetProfilesController(getProfilesRepository);

  const { body, statusCode } = await getProfilesController.handle();

  res.status(statusCode).send(body);
});

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

profileRoutes.patch("/update/", async (req, res) => {
  const updateProfileRepository = new UpdateProfileRepository();

  const updateProfileController = new UpdateProfileController(
    updateProfileRepository
  );

  const { body, statusCode } = await updateProfileController.handle({
    body: req.body
  });

  res.status(statusCode).send(body);
});

export { profileRoutes };

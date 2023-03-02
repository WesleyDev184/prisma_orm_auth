import { Application } from "express";
import RefrashTokenUserController from "../controllers/refrashTokenUserController";

import {
  createNewUserController,
  getAllUsersController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
  auteheticateUserController,
} from "../controllers/userController";

const userRoutes = (app: Application) => {
  app.route("/users/register").post(createNewUserController);
  app.route("/users/login").post(auteheticateUserController);
  app.route("/users/refresh-token").post(RefrashTokenUserController);
  app.route("/users").get(getAllUsersController);
  app
    .route("/users/:id")
    .get(getUserByIdController)
    .put(updateUserController)
    .delete(deleteUserController);
};

export default userRoutes;

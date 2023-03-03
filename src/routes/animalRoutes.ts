import { Application } from "express";
import {
  AnimalCreate,
  AnimalGetAll,
  AnimalGetByUserId,
} from "../controllers/animalController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const animalRoutes = (app: Application) => {
  app.route("/animal").get(AnimalGetAll);

  app.use(ensureAuthenticated);
  app.route("/animal/register").post(AnimalCreate);
  app.route("/animal/:id").get(AnimalGetByUserId);
};

export default animalRoutes;

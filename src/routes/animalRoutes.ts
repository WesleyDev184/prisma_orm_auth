import { Application } from "express";
import { AnimalCreate, AnimalGetAll } from "../controllers/animalController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const animalRoutes = (app: Application) => {
  app.use(ensureAuthenticated);
  app.route("/animal/register").post(AnimalCreate);
  app.route("/animal").get(AnimalGetAll);
};

export default animalRoutes;

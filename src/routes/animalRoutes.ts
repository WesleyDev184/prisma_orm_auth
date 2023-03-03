import { Application } from "express";
import { AnimalCreate, AnimalGetAll } from "../controllers/animalController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const animalRoutes = (app: Application) => {
  app.route("/animal").get(AnimalGetAll);

  app.use(ensureAuthenticated);
  app.route("/animal/register").post(AnimalCreate);
};

export default animalRoutes;

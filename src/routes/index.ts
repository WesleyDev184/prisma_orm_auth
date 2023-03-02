import { Application } from "express";
import userRoutes from "./userRoutes";
import animalRoutes from "./animalRoutes";

const routes = (app: Application) => {
  userRoutes(app);
  animalRoutes(app);
};

export default routes;

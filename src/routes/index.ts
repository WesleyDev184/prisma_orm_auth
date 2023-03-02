import { Application } from "express";
import userRoutes from "./userRoutes";

const routes = (app: Application) => {
  userRoutes(app);
};

export default routes;

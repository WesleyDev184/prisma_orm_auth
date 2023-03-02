import { Request, Response } from "express";
import { refreshTokenUser } from "../auth/refrashTokenUser";

const RefrashTokenUserController = async (req: Request, res: Response) => {
  const { refresh_token } = req.body;

  const refrashToken = await refreshTokenUser(refresh_token);

  return res.json(refrashToken);
};

export default RefrashTokenUserController;

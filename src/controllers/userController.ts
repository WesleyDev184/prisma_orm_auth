import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../repositorys/userRepository";
import { authenticateUser } from "../auth/authenticateUser";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { userValidation } from "../validations/userValidation";

export const createNewUserController = async (req: Request, res: Response) => {
  try {
    await userValidation.validate(req.body);

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    const user = await createUser(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const auteheticateUserController = async (
  req: Request,
  res: Response
) => {
  try {
    const { email, password } = req.body;
    const token = await authenticateUser({ email, password });
    res.json(token);
  } catch (error) {
    res.status(400).json("User or password incorrect");
  }
};

export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const user = await getUserById(Number(req.params.id));
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const updateUserController = async (req: Request, res: Response) => {
  try {
    if (req.body.password) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      req.body.password = hashedPassword;
    }
    const user = await updateUser(Number(req.params.id), req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    await deleteUser(Number(req.params.id));
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(400).json(error);
  }
};

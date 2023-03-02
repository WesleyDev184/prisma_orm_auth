import { prisma } from "../prisma/prisma";
import * as jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

interface User {
  email: string;
  password: string;
}

const SECRET = process.env.JWT_SECRET || "";

export const authenticateUser = async ({ email, password }: User) => {
  const userFound = await prisma.user.findUnique({
    where: { email },
  });
  if (!userFound) throw new Error("User or password incorrect");

  const passwordMatch = await bcrypt.compare(password, userFound.password);
  if (!passwordMatch) throw new Error("User or password incorrect");

  const token = jwt.sign({ id: userFound.id }, SECRET, {
    expiresIn: "1d",
  });

  return { token };
};

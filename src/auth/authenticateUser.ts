import { prisma } from "../prisma/prisma";
import * as jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import generateRefreshToken from "../provider/generateRefrashToken";
import generateTokenProvider from "../provider/generateTokenProvider";
interface User {
  email: string;
  password: string;
}

export const authenticateUser = async ({ email, password }: User) => {
  const userFound = await prisma.user.findUnique({
    where: { email },
  });
  if (!userFound) throw new Error("User or password incorrect");

  const passwordMatch = await bcrypt.compare(password, userFound.password);
  if (!passwordMatch) throw new Error("User or password incorrect");

  await prisma.refreshToken.deleteMany({
    where: {
      userId: userFound.id,
    },
  });

  const token = generateTokenProvider(userFound.id);
  const refreshToken = await generateRefreshToken(userFound.id);

  return { token, refreshToken };
};

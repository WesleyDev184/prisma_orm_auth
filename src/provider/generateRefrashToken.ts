import { prisma } from "../prisma/prisma";
import dayjs from "dayjs";

const generateRefreshToken = async (userID: number) => {
  const expireIn = dayjs().add(1, "day").unix();

  const refreshToken = await prisma.refreshToken.create({
    data: {
      userId: userID,
      expiresIN: expireIn,
    },
  });
  return refreshToken;
};

export default generateRefreshToken;

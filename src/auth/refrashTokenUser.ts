import { prisma } from "../prisma/prisma";
import generateTokenProvider from "../provider/generateTokenProvider";
import dayjs from "dayjs";
import generateRefreshToken from "../provider/generateRefrashToken";

export const refreshTokenUser = async (refresh_token: string) => {
  const refrashToken = await prisma.refreshToken.findFirst({
    where: {
      id: refresh_token,
    },
  });

  if (!refrashToken) throw new Error("Refresh token not found");

  const token = generateTokenProvider(refrashToken.userId);

  const refrashTokExpired = dayjs().isAfter(dayjs.unix(refrashToken.expiresIN));

  if (refrashTokExpired) {
    await prisma.refreshToken.deleteMany({
      where: {
        userId: refrashToken.userId,
      },
    });

    const newRefrashToken = generateRefreshToken(refrashToken.userId);

    return { token, newRefrashToken };
  }

  return { token };
};

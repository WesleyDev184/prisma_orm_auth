import { prisma } from "../prisma/prisma";

export const createUser = async (data: any) => {
  const newUser = await prisma.user.create({
    data,
    select: {
      id: true,
      email: true,
      name: true,
      password: false,
      phone: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return newUser;
};

export const getAllUsers = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      password: false,
      phone: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return users;
};

export const getUserById = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      name: true,
      password: false,
      phone: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return user;
};

export const updateUser = async (id: number, data: any) => {
  const user = await prisma.user.update({
    where: { id },
    data,
    select: {
      id: true,
      email: true,
      name: true,
      password: false,
      phone: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return user;
};

export const deleteUser = async (id: number) => {
  const user = await prisma.user.delete({
    where: { id },
  });
  return user;
};

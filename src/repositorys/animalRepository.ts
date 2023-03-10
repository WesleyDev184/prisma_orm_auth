import { prisma } from "../prisma/prisma";

export const createAnimal = async (data: any) => {
  const newAnimal = await prisma.animal.create({
    data,
    select: {
      id: true,
      number: true,
      type: true,
      userId: true,
      createdAt: true,
    },
  });
  return newAnimal;
};

export const getAnimals = async () => {
  const animals = await prisma.animal.findMany();
  return animals;
};

export const getAnimalByUserId = async (id: number) => {
  const animal = await prisma.animal.findMany({
    where: {
      userId: id,
    },
  });
  return animal;
};

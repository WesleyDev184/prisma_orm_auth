import { createAnimal, getAnimals } from "../repositorys/animalRepository";
import { Request, Response } from "express";

export const AnimalCreate = async (req: Request, res: Response) => {
  try {
    const animal = await createAnimal(req.body);
    res.status(200).json(animal);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const AnimalGetAll = async (req: Request, res: Response) => {
  try {
    const animals = await getAnimals();
    res.status(200).json(animals);
  } catch (error) {
    res.status(400).json(error);
  }
};

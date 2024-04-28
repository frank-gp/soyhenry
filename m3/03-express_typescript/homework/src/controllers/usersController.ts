import { Request, Response } from "express";

export const getUsersController = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Get Users" });
};

export const getUserByIdController = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Get User" });
};

export const createUserController = async (req: Request, res: Response) => {
  res.status(201).json({ message: "Create User" });
};

export const loginUserController = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Login User" });
};

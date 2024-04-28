import { Request, Response } from "express";

export const getTurnsController = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Get Turns" });
};

export const getTurnByIdController = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Get Turn" });
};

export const createTurnController = async (req: Request, res: Response) => {
  res.status(201).json({ message: "Create Turn" });
};

export const cancelTurnController = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Cancel Turn" });
};

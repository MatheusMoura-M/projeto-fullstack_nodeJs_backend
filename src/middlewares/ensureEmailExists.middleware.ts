import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import Client from "../entities/client.entity";
import { AppError } from "../errors";

const ensureEmailExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const email: string = req.body.email;

  const clientRepo = AppDataSource.getRepository(Client);
  const client = await clientRepo.findOne({
    where: {
      email,
    },
  });

  if (client) {
    throw new AppError("Email already exists", 409);
  }

  next();
};

export default ensureEmailExistsMiddleware;

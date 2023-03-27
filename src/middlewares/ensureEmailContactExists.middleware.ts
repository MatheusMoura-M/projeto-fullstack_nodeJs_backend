import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";
import { contactRepo } from "../utils/repositories";

const ensureEmailContactExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const email: string = req.body.email;
  const clientId: string = req.params.id;

  if (!email) {
    next();
  } else {
    const client = await contactRepo.findOne({
      where: {
        email,
      },
    });

    if (client && client.id !== clientId) {
      throw new AppError("Email already exists", 409);
    }

    next();
  }
};

export default ensureEmailContactExistsMiddleware;

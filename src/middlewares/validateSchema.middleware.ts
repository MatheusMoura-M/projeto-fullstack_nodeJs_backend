import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";
import { AppError } from "../errors";

const validateSchemaMiddleware =
  (schema: AnySchema) =>
  async (req: Request, resp: Response, next: NextFunction) => {
    try {
      const validated = await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });

      req.body = validated;
      return next();
    } catch (error) {
      throw new AppError(error.errors, 401);
    }
  };

export default validateSchemaMiddleware;

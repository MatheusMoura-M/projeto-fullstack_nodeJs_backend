import { Router } from "express";
import { createClientController } from "../controllers";
import ensureEmailExistsMiddleware from "../middlewares/ensureEmailExists.middleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.middleware";
import { createClientRequestSchema } from "../schemas/client";

export const clientRouter = Router();

clientRouter.post(
  "",
  validateSchemaMiddleware(createClientRequestSchema),
  ensureEmailExistsMiddleware,
  createClientController
);

import { Router } from "express";
import {
  createClientController,
  getAllClientsController,
} from "../controllers/clients";
import deleteClientController from "../controllers/clients/deleteContact.controller";
import updateClientController from "../controllers/clients/updateClient.controller";
import {
  ensureEmailClientExistsMiddleware,
  validateSchemaMiddleware,
} from "../middlewares";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import {
  createClientRequestSchema,
  updateClientRequestSchema,
} from "../schemas/client";

export const clientRouter = Router();

clientRouter.post(
  "",
  validateSchemaMiddleware(createClientRequestSchema),
  ensureEmailClientExistsMiddleware,
  createClientController
);

clientRouter.patch(
  "/:id",
  validateSchemaMiddleware(updateClientRequestSchema),
  ensureEmailClientExistsMiddleware,
  updateClientController
);

clientRouter.get("", ensureAuthMiddleware, getAllClientsController);

clientRouter.delete("/:id", deleteClientController);

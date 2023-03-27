import { Router } from "express";
import {
  createClientController,
  getAllClientsController,
  getClientController,
} from "../controllers/clients";
import deleteClientController from "../controllers/clients/deleteContact.controller";
import updateClientController from "../controllers/clients/updateClient.controller";
import { getAllContactsController } from "../controllers/contacts";
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
export const clientsRouter = Router();

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

clientRouter.get("/contacts", ensureAuthMiddleware, getAllContactsController);
clientsRouter.get("", getAllClientsController);
clientRouter.get("/:id", getClientController);

clientRouter.delete("/:id", deleteClientController);

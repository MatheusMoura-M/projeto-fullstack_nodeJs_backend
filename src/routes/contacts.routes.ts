import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  updateContactController,
} from "../controllers/contacts";
import {
  ensureEmailContactExistsMiddleware,
  validateSchemaMiddleware,
} from "../middlewares";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import { updateContactRequestSchema } from "../schemas/contacts";

export const contactRouter = Router();

contactRouter.post(
  "",
  ensureAuthMiddleware,
  ensureEmailContactExistsMiddleware,
  createContactController
);

contactRouter.patch(
  "/:id",
  validateSchemaMiddleware(updateContactRequestSchema),
  ensureEmailContactExistsMiddleware,
  updateContactController
);

contactRouter.delete("/:id", deleteContactController);

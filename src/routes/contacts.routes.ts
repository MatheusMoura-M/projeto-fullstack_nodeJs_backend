import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  getAllContactsController,
  updateContactController,
} from "../controllers/contacts";
import {
  ensureEmailContactExistsMiddleware,
  validateSchemaMiddleware,
} from "../middlewares";
import { updateContactRequestSchema } from "../schemas/contacts";

export const contactByClientRouter = Router();
export const contactRouter = Router();

contactByClientRouter.post(
  "/:id/contacts",
  ensureEmailContactExistsMiddleware,
  createContactController
);

contactByClientRouter.get("/:id/contacts", getAllContactsController);

contactRouter.patch(
  "/:id",
  validateSchemaMiddleware(updateContactRequestSchema),
  ensureEmailContactExistsMiddleware,
  updateContactController
);

contactRouter.delete("/:id", deleteContactController);

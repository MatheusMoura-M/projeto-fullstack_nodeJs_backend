import { Router } from "express";
import { createContactController } from "../controllers/contacts";

export const contactRouter = Router();

contactRouter.post("/:id/contacts", createContactController);

import { Router } from "express";
import loginClientController from "../controllers/sessions";

export const sessionRouter = Router();

sessionRouter.post("", loginClientController);

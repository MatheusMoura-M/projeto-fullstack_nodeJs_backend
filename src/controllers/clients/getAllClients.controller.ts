import { Request, Response } from "express";
import { getAllClientsService } from "../../services/client";

const getAllClientsController = async (req: Request, resp: Response) => {
  const data = await getAllClientsService();

  return resp.json(data);
};

export default getAllClientsController;

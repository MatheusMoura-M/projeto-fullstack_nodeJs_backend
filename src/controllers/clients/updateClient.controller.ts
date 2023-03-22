import { Request, Response } from "express";
import { updateClientService } from "../../services/client";

const updateClientController = async (req: Request, res: Response) => {
  const clientId = req.params.id;

  const data = await updateClientService(req.body, clientId);

  return res.json(data);
};

export default updateClientController;

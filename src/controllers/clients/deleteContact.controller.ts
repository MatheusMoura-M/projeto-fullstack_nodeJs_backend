import { Request, Response } from "express";
import { deleteClientService } from "../../services/client";

const deleteClientController = async (req: Request, resp: Response) => {
  const data = await deleteClientService(req.params.id);

  return resp.status(204).json(data);
};

export default deleteClientController;

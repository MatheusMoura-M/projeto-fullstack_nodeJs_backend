import { Request, Response } from "express";
import { getClientService } from "../../services/client";

const getClientController = async (req: Request, resp: Response) => {
  const clientId = req.client.id;
  const data = await getClientService(clientId);

  return resp.json(data);
};

export default getClientController;

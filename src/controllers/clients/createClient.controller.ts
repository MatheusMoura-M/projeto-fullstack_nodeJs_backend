import { Request, Response } from "express";
import createClientService from "../../services/client/createClient.service";

const createClientController = async (req: Request, resp: Response) => {
  const data = await createClientService(req.body);

  return resp.status(201).json(data);
};

export default createClientController;

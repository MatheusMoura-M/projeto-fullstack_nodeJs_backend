import { Request, Response } from "express";
import loginClientService from "../../services/sessions";

const loginClientController = async (req: Request, res: Response) => {
  const data = await loginClientService(req.body);

  return res.json(data);
};

export default loginClientController;

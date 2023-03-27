import { Request, Response } from "express";
import createContactService from "../../services/contacts/createContact.service";

const createContactController = async (req: Request, resp: Response) => {
  const clientId = req.client.id;
  const data = await createContactService(req.body, clientId);

  return resp.status(201).json(data);
};

export default createContactController;

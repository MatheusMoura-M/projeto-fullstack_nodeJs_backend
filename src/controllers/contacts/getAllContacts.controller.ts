import { Request, Response } from "express";
import getAllContactsService from "../../services/contacts/getAllContacts.service";

const getAllContactsController = async (req: Request, resp: Response) => {
  const clientId = req.client.id;

  const data = await getAllContactsService(clientId);

  return resp.json(data);
};

export default getAllContactsController;

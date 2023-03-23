import { Request, Response } from "express";
import getAllContactsService from "../../services/contacts/getAllContacts.service";

const getAllContactsController = async (req: Request, resp: Response) => {
  const cliendId = req.client.id;
  const data = await getAllContactsService(cliendId);

  return resp.json(data);
};

export default getAllContactsController;

import { Request, Response } from "express";
import getAllContactsService from "../../services/contacts/getAllContacts.service";

const getAllContactsController = async (req: Request, resp: Response) => {
  const data = await getAllContactsService(req.params.id);

  return resp.json(data);
};

export default getAllContactsController;

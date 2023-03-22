import { Request, Response } from "express";
import createContactService from "../../services/contacts/createContact.service";

const createContactController = async (req: Request, resp: Response) => {
  const cliendId = req.params.id;
  const data = await createContactService(req.body, cliendId);

  return resp.status(201).json(data);
};

export default createContactController;

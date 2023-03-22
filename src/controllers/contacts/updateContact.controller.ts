import { Request, Response } from "express";
import updateContactService from "../../services/contacts/updateContact.service";

const updateContactController = async (req: Request, res: Response) => {
  const clientId = req.params.id;

  const data = await updateContactService(req.body, clientId);

  return res.json(data);
};

export default updateContactController;

import { Request, Response } from "express";
import { deleteContactService } from "../../services/contacts";

const deleteContactController = async (req: Request, resp: Response) => {
  const data = await deleteContactService(req.params.id);

  return resp.status(204).json(data);
};

export default deleteContactController;

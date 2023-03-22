import { AppError } from "../../errors";
import {
  iCreateContactRequest,
  iCreateContactResponse,
} from "../../interfaces";
import { createContactReturnSchema } from "../../schemas/contacts";
import { clientRepo, contactRepo } from "../../utils/repositories";

const createContactService = async (
  payload: iCreateContactRequest,
  cliendId: string
): Promise<iCreateContactResponse> => {
  const clientFound = await clientRepo.findOne({
    where: {
      id: cliendId,
    },
  });

  if (!clientFound) {
    throw new AppError("Client not found", 404);
  }

  const contactData = {
    ...payload,
    client: { id: cliendId },
  };

  const createContact = contactRepo.create(contactData);
  await contactRepo.save(createContact);

  const clientWithoutPassword = await createContactReturnSchema.validate(
    createContact,
    {
      stripUnknown: true,
    }
  );

  return clientWithoutPassword;
};

export default createContactService;

import { iCreateContactResponse } from "../../interfaces";
import { contactArrayReturnSchema } from "../../schemas/contacts";
import { contactRepo } from "../../utils/repositories";

const getAllContactsService = async (
  clientId: string
): Promise<iCreateContactResponse[]> => {
  const clientWithContacts = await contactRepo.find({
    relations: {
      client: true,
    },
    where: {
      client: { id: clientId },
    },
  });

  const clientValidated = await contactArrayReturnSchema.validate(
    clientWithContacts,
    {
      stripUnknown: true,
    }
  );

  return clientValidated;
};

export default getAllContactsService;

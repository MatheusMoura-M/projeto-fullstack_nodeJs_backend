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

  const clientWithoutPassword = await contactArrayReturnSchema.validate(
    clientWithContacts,
    {
      stripUnknown: true,
    }
  );

  return clientWithoutPassword;
};

export default getAllContactsService;

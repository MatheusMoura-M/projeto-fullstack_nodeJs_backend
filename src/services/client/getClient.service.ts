import { iCreateClientResponse } from "../../interfaces";
import { createClientReturnSchema } from "../../schemas/client";
import { clientRepo } from "../../utils/repositories";

const getClientService = async (
  clientId: string
): Promise<iCreateClientResponse> => {
  const clientsWithContacts = await clientRepo.findOne({
    relations: {
      contacts: true,
    },
    where: {
      id: clientId,
    },
  });

  const clientWithoutPassword = await createClientReturnSchema.validate(
    clientsWithContacts,
    {
      stripUnknown: true,
    }
  );

  return clientWithoutPassword;
};

export default getClientService;

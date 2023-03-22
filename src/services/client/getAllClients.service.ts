import { iCreateClientResponse } from "../../interfaces";
import { clientArrayReturnSchema } from "../../schemas/client";
import { clientRepo } from "../../utils/repositories";

const getAllClientsService = async (): Promise<iCreateClientResponse[]> => {
  const clientsWithContacts = await clientRepo
    .createQueryBuilder("client")
    .leftJoinAndSelect("client.contacts", "contacts")
    .getMany();

  const clientWithoutPassword = await clientArrayReturnSchema.validate(
    clientsWithContacts,
    {
      stripUnknown: true,
    }
  );

  return clientWithoutPassword;
};

export default getAllClientsService;

import { iUpdateClientRequest, iUpdateClientResponse } from "../../interfaces";
import { createClientReturnSchema } from "../../schemas/client";
import { clientRepo } from "../../utils/repositories";

const updateClientService = async (
  payload: iUpdateClientRequest,
  clientId: string
): Promise<iUpdateClientResponse> => {
  await clientRepo
    .createQueryBuilder("client")
    .update()
    .set({ ...payload })
    .where("client.id = :id", { id: clientId })
    .execute();

  const client = await clientRepo.findOneBy({ id: clientId });

  const clientWithoutPassword = await createClientReturnSchema.validate(
    client,
    {
      stripUnknown: true,
    }
  );

  return clientWithoutPassword;
};

export default updateClientService;

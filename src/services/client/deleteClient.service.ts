import { AppError } from "../../errors";
import { clientRepo } from "../../utils/repositories";

const deleteClientService = async (clientId: string) => {
  const client = await clientRepo.findOneBy({
    id: clientId,
  });

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  const clientDeleted = await clientRepo
    .createQueryBuilder("client")
    .softDelete()
    .where("id = :id", { id: clientId })
    .execute();

  return clientDeleted;
};

export default deleteClientService;

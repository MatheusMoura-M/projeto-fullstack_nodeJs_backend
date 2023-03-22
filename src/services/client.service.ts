import { iCreateClientRequest, iCreateClientResponse } from "../interfaces";
import { createClientReturnSchema } from "../schemas/client";
import { clientRepo } from "../utils/repositories";

export const createClientService = async (
  payload: iCreateClientRequest
): Promise<iCreateClientResponse> => {
  const createClient = clientRepo.create(payload);
  await clientRepo.save(createClient);

  const clientWithoutPassword = await createClientReturnSchema.validate(
    createClient,
    {
      stripUnknown: true,
    }
  );

  return clientWithoutPassword;
};

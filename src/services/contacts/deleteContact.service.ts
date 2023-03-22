import { AppError } from "../../errors";
import { contactRepo } from "../../utils/repositories";

const deleteContactService = async (contactId: string) => {
  const contact = await contactRepo.findOneBy({
    id: contactId,
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  const contactDeleted = await contactRepo
    .createQueryBuilder("contacts")
    .softDelete()
    .where("id = :id", { id: contactId })
    .execute();

  return contactDeleted;
};

export default deleteContactService;

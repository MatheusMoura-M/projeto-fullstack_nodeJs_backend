import {
  iUpdateContactRequest,
  iUpdateContactResponse,
} from "../../interfaces";
import { createContactReturnSchema } from "../../schemas/contacts";
import { contactRepo } from "../../utils/repositories";

const updateContactService = async (
  payload: iUpdateContactRequest,
  contactId: string
): Promise<iUpdateContactResponse> => {
  if (payload.name === "") {
    delete payload.name;
  }
  if (payload.email === "") {
    delete payload.email;
  }
  if (payload.phone === "") {
    delete payload.phone;
  }

  await contactRepo
    .createQueryBuilder("contacts")
    .update()
    .set({ ...payload })
    .where("contacts.id = :id", { id: contactId })
    .execute();

  const contact = await contactRepo.findOneBy({ id: contactId });

  const contactValidated = await createContactReturnSchema.validate(contact, {
    stripUnknown: true,
  });

  return contactValidated;
};

export default updateContactService;

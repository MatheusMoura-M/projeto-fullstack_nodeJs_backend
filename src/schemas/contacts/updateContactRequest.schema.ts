import * as yup from "yup";
import { SchemaOf } from "yup";
import { iUpdateContactRequest } from "../../interfaces";

const updateContactRequestSchema: SchemaOf<iUpdateContactRequest> = yup
  .object()
  .shape({
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    phone: yup.string().notRequired(),
  });

export default updateContactRequestSchema;

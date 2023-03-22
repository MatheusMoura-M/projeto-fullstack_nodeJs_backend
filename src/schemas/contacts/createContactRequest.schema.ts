import * as yup from "yup";
import { SchemaOf } from "yup";
import { iCreateContactRequest } from "../../interfaces";

const createContactRequestSchema: SchemaOf<iCreateContactRequest> = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().required(),
    password: yup.string().required(),
  });

export default createContactRequestSchema;

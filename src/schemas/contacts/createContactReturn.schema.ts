import * as yup from "yup";
import { SchemaOf } from "yup";
import { iCreateContactResponse } from "../../interfaces";

const createContactReturnSchema: SchemaOf<iCreateContactResponse> = yup
  .object()
  .shape({
    updatedAt: yup.date().required(),
    createdAt: yup.date().required(),
    client: yup.string().required(),
    phone: yup.number().required(),
    email: yup.string().email().required(),
    name: yup.string().required(),
    id: yup.string().required(),
  });

export default createContactReturnSchema;

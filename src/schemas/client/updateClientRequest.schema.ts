import * as yup from "yup";
import { SchemaOf } from "yup";
import { iUpdateClientRequest } from "../../interfaces";

const updateClientRequestSchema: SchemaOf<iUpdateClientRequest> = yup
  .object()
  .shape({
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    phone: yup.string().notRequired(),
    password: yup.string().notRequired(),
  });

export default updateClientRequestSchema;

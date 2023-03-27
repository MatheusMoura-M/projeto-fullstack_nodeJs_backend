import * as yup from "yup";
import { SchemaOf } from "yup";
import { iCreateClientRequest } from "../../interfaces";

const createClientRequestSchema: SchemaOf<iCreateClientRequest> = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    password: yup.string().required(),
  });

export default createClientRequestSchema;

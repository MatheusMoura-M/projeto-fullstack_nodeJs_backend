import * as yup from "yup";
import { SchemaOf } from "yup";
import { iCreateClientResponse } from "../../interfaces";

const createClientReturnSchema: SchemaOf<iCreateClientResponse> = yup
  .object()
  .shape({
    contacts: yup.array().notRequired(),
    updatedAt: yup.date().required(),
    createdAt: yup.date().required(),
    phone: yup.string().required(),
    email: yup.string().email().required(),
    name: yup.string().required(),
    id: yup.string().required(),
  });

export default createClientReturnSchema;

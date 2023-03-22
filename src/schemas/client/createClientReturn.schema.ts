import * as yup from "yup";
import { SchemaOf } from "yup";
import { iCreateClientRequest, iCreateClientResponse } from "../../interfaces";

const createClientRequestSchema: SchemaOf<iCreateClientRequest> = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().required(),
    password: yup.string().required(),
  });

const createClientReturnSchema: SchemaOf<iCreateClientResponse> = yup
  .object()
  .shape({
    updatedAt: yup.date().required(),
    createdAt: yup.date().required(),
    phone: yup.number().required(),
    email: yup.string().email().required(),
    name: yup.string().required(),
    id: yup.string().required(),
  });

export { createClientReturnSchema, createClientRequestSchema };

import * as yup from "yup";
import { SchemaOf } from "yup";
import { iArrayClientWithContacts } from "../../interfaces";

const clientArrayReturnSchema: SchemaOf<iArrayClientWithContacts[]> = yup.array(
  yup.object().shape({
    contacts: yup.array(),
    updatedAt: yup.date().required(),
    createdAt: yup.date().required(),
    phone: yup.string().required(),
    email: yup.string().email().required(),
    name: yup.string().required(),
    id: yup.string().required(),
  })
);

export default clientArrayReturnSchema;

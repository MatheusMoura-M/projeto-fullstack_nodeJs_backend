import * as yup from "yup";
import { SchemaOf } from "yup";
import { iContactsByClientResponse } from "../../interfaces";

const contactArrayReturnSchema: SchemaOf<iContactsByClientResponse[]> =
  yup.array(
    yup.object().shape({
      updatedAt: yup.date().required(),
      createdAt: yup.date().required(),
      client: yup.object().shape({
        id: yup.string().required(),
      }),
      phone: yup.string().required(),
      email: yup.string().email().required(),
      name: yup.string().required(),
      id: yup.string().required(),
    })
  );

export default contactArrayReturnSchema;

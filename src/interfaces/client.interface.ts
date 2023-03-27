// CREATE
interface iCreateClientRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
}

interface iOmitClientPassword extends Omit<iCreateClientRequest, "password"> {}

interface iCreateClientResponse extends iOmitClientPassword {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

interface iArrayClientWithContacts extends iCreateClientResponse {
  contacts: [];
}

// UPDATE
interface iUpdateClientRequest {
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
}

interface iUpdateClientResponse extends iCreateClientResponse {}

// LOGIN
interface ILoginClient {
  email: string;
  password: string;
}

export {
  iCreateClientRequest,
  iOmitClientPassword,
  iCreateClientResponse,
  ILoginClient,
  iArrayClientWithContacts,
  iUpdateClientRequest,
  iUpdateClientResponse,
};

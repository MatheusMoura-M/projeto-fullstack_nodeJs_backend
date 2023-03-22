interface iCreateClientRequest {
  name: string;
  email: string;
  password: string;
  phone: number;
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
};

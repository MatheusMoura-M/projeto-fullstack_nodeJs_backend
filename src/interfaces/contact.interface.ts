interface iCreateContactRequest {
  name: string;
  email: string;
  phone: number;
}

interface iCreateContactResponse extends iCreateContactRequest {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  client: string;
}

export { iCreateContactRequest, iCreateContactResponse };

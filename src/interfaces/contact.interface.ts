// CREATE
interface iCreateContactRequest {
  name: string;
  email: string;
  phone: number;
}

interface iCreateContactResponse extends iCreateContactRequest {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// UPDATE
interface iUpdateContactRequest {
  name?: string;
  email?: string;
  phone?: number;
}

// GET
interface iUpdateContactResponse extends iCreateContactResponse {}

interface iListClientOfTheContact {
  id: string;
}

interface iContactsByClientResponse extends iCreateContactRequest {
  id: string;
  name: string;
  email: string;
  phone: number;
  createdAt: Date;
  updatedAt: Date;
  client: iListClientOfTheContact;
}

export {
  iCreateContactRequest,
  iCreateContactResponse,
  iContactsByClientResponse,
  iUpdateContactRequest,
  iUpdateContactResponse,
};

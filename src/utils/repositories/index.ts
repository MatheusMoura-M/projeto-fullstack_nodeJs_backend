import AppDataSource from "../../data-source";
import { Client, Contacts } from "../../entities";

const clientRepo = AppDataSource.getRepository(Client);
const contactRepo = AppDataSource.getRepository(Contacts);

export { clientRepo, contactRepo };

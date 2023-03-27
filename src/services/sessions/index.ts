import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors";
import {
  iCreateSessionRequest,
  iCreateSessionResponse,
} from "../../interfaces";
import { clientRepo } from "../../utils/repositories";

const loginClientService = async (
  payload: iCreateSessionRequest
): Promise<iCreateSessionResponse> => {
  const clientFound = await clientRepo.findOne({
    where: { email: payload.email },
  });

  if (!clientFound) {
    throw new AppError("Email or password invalid", 401);
  }

  const passwordMatch = await compare(payload.password, clientFound.password);

  if (!passwordMatch) {
    throw new AppError("Email or password invalid", 401);
  }

  const token = jwt.sign({ email: clientFound.email }, process.env.SECRET_KEY, {
    expiresIn: "24h",
    subject: clientFound.id,
  });

  return { token: token };
};

export default loginClientService;

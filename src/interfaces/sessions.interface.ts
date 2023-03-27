interface iCreateSessionRequest {
  email: string;
  password: string;
}

interface iCreateSessionResponse {
  token: string;
}

export { iCreateSessionRequest, iCreateSessionResponse };

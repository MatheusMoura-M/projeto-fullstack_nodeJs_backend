import { Request, Response, NextFunction } from "express";

class AppError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

const errorHandler = async (
  err: AppError,
  req: Request,
  resp: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return resp.status(err.statusCode).json({ message: err.message });
  }
  console.log("AAA", err);
  return resp.status(500).json({ message: "Internal Server Error" });
};

export { AppError, errorHandler };

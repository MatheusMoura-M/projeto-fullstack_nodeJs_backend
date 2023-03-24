import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const ensureAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Missing or invalid token" });
  }
  token = token.split(" ")[1];
  jwt.verify(
    token,
    process.env.SECRET_KEY,
    (error: { message: any }, decoded: any) => {
      if (error) {
        return res.status(401).json({ message: error.message });
      }
      console.log("DDEEEEECOOODED", decoded);
      req.client = {
        id: decoded.sub as string,
      };
    }
  );
  return next();
};

export default ensureAuthMiddleware;

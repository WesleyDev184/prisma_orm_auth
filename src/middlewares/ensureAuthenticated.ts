import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const ensureAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // Get token from header
  const authToken = request.headers.authorization;

  // Check if not token
  if (!authToken) {
    return response.status(401).json({ msg: "No token, authorization denied" });
  }

  const [, token] = authToken.split(" ");

  // Verify token
  try {
    jwt.verify(token, process.env.JWT_SECRET as string);
    return next();
  } catch (err) {
    response.status(401).json({ msg: "Token is not valid" });
  }
};

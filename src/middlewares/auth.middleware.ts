import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.headers.authorization;

  // el token vino en el header?
  if (!token) {
    res.status(401).json({ message: 'No se ha enviado un token' });
    return;
  }

  const secret = process.env.JWT_API_SECRET || '';

  try {
    jwt.verify(token, secret);
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token inválido' });
  }
};

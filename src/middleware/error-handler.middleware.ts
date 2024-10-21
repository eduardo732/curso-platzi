import { Request, Response, NextFunction } from 'express';
import { Boom } from '@hapi/boom';

function errorHandler(
  error: Error | Boom,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(error);

  if ('isBoom' in error) {
    const { output } = error;
    return res.status(output.statusCode).json(output.payload);
  }

  res.status(500).json({
    statusCode: 500,
    error: 'Internal Server Error',
    message: 'Ha ocurrido un error inesperado'
  });
}

export default errorHandler;

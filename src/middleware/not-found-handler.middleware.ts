import { Request, Response } from 'express';
import Boom from '@hapi/boom';

function notFoundHandler(req: Request, res: Response) {
  const { output } = Boom.notFound('Ruta no encontrada');
  res.status(output.statusCode).json(output.payload);
}

export default notFoundHandler;

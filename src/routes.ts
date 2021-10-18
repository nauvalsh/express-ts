import { createUserSchema } from './schema/user.schema';
import { Express, Request, Response } from 'express';
import { createUserHandler } from './controller/user.controller';
import validateResource from './middleware/validateReousce';

function routes(app: Express) {
  app.post('/api/users', validateResource(createUserSchema), createUserHandler);
}

export default routes;

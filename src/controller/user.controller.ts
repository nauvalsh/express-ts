import { Request, Response } from 'express';
import { omit } from 'lodash';
import { createUser } from '../service/user.service';
import logger from '../utils/logger';

export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body);

    return res.send(omit(user.toJSON(), 'password'));
  } catch (e: any) {
    logger.error(e);
    res.status(409).send(e.message);
  }
}

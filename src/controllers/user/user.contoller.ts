import {Request, Response} from 'express';

import {UserService} from '../../services';
import {SuccessResponse} from '../../util';

export class UserController {
  public static async list(_req: Request, res: Response): Promise<void> {
    const userService = new UserService();
    const result = await userService.list();
    const response = new SuccessResponse(res, 'success', result);
    response.send();
  }

  public static async create(req: Request, res: Response): Promise<void> {
    const userService = new UserService();
    const data = req.body;
    const result = await userService.create(data);
    const response = new SuccessResponse(res, 'success', result);
    response.send();
  }
}

import express from 'express';
import {UserController} from './user.contoller';
import {UserValidation} from './user.validator';
import {validator} from '../../middleware/validator';
import {asyncWrapper} from '../../middleware/async-wrapper';
export const UserRouter = express.Router();

UserRouter.get('/', asyncWrapper(UserController.list));
UserRouter.post('/', [
  validator(UserValidation.create, 'body'),
  asyncWrapper(UserController.create),
]);

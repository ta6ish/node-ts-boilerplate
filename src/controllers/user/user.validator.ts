import Joi from 'joi';

const create = Joi.object({
  username: Joi.string().label('Username').min(4).required(),
  email: Joi.string().label('Email').email().required(),
});

export const UserValidation = {
  create,
};

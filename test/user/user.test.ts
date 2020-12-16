// eslint-disable-next-line node/no-unpublished-import
import supertest from 'supertest';
import {app} from '../../src/app';
import {UserRepository} from '../../src/repositories';

const find = jest.spyOn(UserRepository.prototype, 'find');
const create = jest.spyOn(UserRepository.prototype, 'create');
const baseUrl = '/api/users';

describe(baseUrl, () => {
  it('should get users', async () => {
    find.mockResolvedValue([{username: 'test', email: 'test'}]);
    const response = await supertest(app).get(baseUrl).expect(200);
    expect(response.body.data[0]).toHaveProperty('email');
    expect(response.body.data[0]).toHaveProperty('username');
    expect(find).toHaveBeenCalledTimes(1);
  });
  it('should handle error in dev mode', async () => {
    find.mockRejectedValue(new Error('failed error'));
    const response = await supertest(app).get(baseUrl);
    expect(response.body.message).toEqual('failed error');
  });

  it('should fail the validation', async () => {
    const response = await supertest(app).post(baseUrl).expect(400);
    expect(response.body.message).toEqual('"Username" is required');
  });

  it('should create user', async () => {
    const user = {email: 'email', username: 'username'};
    create.mockResolvedValue(user);
    const response = await supertest(app)
      .post(baseUrl)
      .send({
        username: 'username',
        email: 'test@email.com',
      })
      .expect(200);
    expect(response.body.data).toHaveProperty('email');
    expect(response.body.data).toHaveProperty('username');
    expect(create).toHaveBeenCalledTimes(1);
  });
});

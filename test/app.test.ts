// eslint-disable-next-line node/no-unpublished-import
import supertest from 'supertest';
import {app} from '../src/app';

const baseUrl = '/api/unknown';

describe(baseUrl, () => {
  it('should get 404', async () => {
    const response = await supertest(app).get(baseUrl).expect(404);
    expect(response.body.message).toEqual('Not Found');
  });
});

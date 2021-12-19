import request from 'supertest';
import { app } from '../app';

interface Params {
  email?: string;
  password?: string;
}

export const signupMiddleware = async ({ email = 'test@test.com', password = 'password' }: Params) => {
  const firstName = 'test';
  const lastName = 'test';
  const response = await request(app)
    .post('/api/auth/signup')
    .send({
      email,
      password,
      firstName,
      lastName,
    })
    .expect(201);
  const cookie = response.get('Set-Cookie');
  return cookie;
};

export const signinMiddleware = async (): Promise<string[]> => {
  const email = 'test@test.com';
  const password = 'password';
  const response = await request(app)
    .post('/api/auth/signup')
    .send({
      email,
      password,
      firstName: 'test',
      lastName: 'test',
    })
    .expect(201);
  console.log('RESPNSESE SER ESR E', response.error);
  const cookie = response.get('Set-Cookie');
  return cookie;
};

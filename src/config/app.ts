import dotenv from 'dotenv';
dotenv.config();

export const environment = process.env.NODE_ENV;
export const appConfig = {
  port: process.env.PORT || 3000,
};

import dotenv from 'dotenv';
dotenv.config();
export const dbConfig = {
  connectionString: process.env.CONNECTION_URI,
};

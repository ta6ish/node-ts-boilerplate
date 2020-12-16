import mongoose from 'mongoose';
import {dbConfig} from '../config';

export class MongoProvider {
  static async init() {
    return mongoose.connect(dbConfig.connectionString, {
      useNewUrlParser: true,
    });
  }
}

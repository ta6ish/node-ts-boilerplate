import {UserDTO} from '../interfaces/dto/user';
import {MongooseUser} from '../models';

export class UserRepository {
  async find(query: {[key: string]: unknown}): Promise<UserDTO[]> {
    const res = await MongooseUser.find(query, {
      username: true,
      email: true,
    }).lean();
    return res.map(item => ({
      username: item.username,
      email: item.email,
    }));
  }

  async create(data: UserDTO): Promise<UserDTO> {
    const result = await MongooseUser.create(data);
    return {
      username: result.username,
      email: result.email,
    };
  }

  async update(
    condition: {[key: string]: unknown},
    data: UserDTO
  ): Promise<UserDTO> {
    const result = await MongooseUser.update(condition, data);
    return {
      username: result.username,
      email: result.email,
    };
  }

  async findBy(column: string, value: string | number): Promise<UserDTO> {
    const result = await MongooseUser.findOne({[column]: value}).lean();
    return {
      username: result.username,
      email: result.email,
    };
  }

  async findByAndDelete(column: string, value: string | number): Promise<void> {
    await MongooseUser.deleteOne({[column]: value});
  }
}

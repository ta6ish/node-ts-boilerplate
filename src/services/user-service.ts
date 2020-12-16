import {BaseService} from './base-service';
import {UserRepository} from '../repositories/user';
import {UserDTO} from '../interfaces/dto/user';

export class UserService extends BaseService {
  private repository = new UserRepository();
  public list(): Promise<UserDTO[]> {
    return this.repository.find({});
  }

  public async create(data: {
    username: string;
    email: string;
  }): Promise<UserDTO> {
    return this.repository.create(data);
  }
}

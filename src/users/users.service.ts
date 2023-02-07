import { Inject, Injectable } from '@nestjs/common';
import { User } from '../database/models/User';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@Inject(User) private readonly userModel: typeof User) {}

  async createUser(
    username: string,
    password: string,
    firstName: string,
    lastName,
  ): Promise<User> {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);

    return this.userModel.query().insert({
      email: username,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
    });
  }

  async getUser(query: any): Promise<User> {
    return this.userModel.query().findOne(query);
  }
}

import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JWT_SERCRET } from '../utils/Constants';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.getUser({ email: username });

    if (!user) return null;

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!user) {
      throw new NotAcceptableException('Could not find the user');
    }

    if (user && passwordValid) {
      return user;
    }

    return null;
  }

  async login(user: any) {
    let tmpUser;

    try {
      tmpUser = await this.validateUser(user.username, user.password);
    } catch (error) {
      console.log(error);
    }

    if (tmpUser) {
      return {
        access_token: this.jwtService.sign(
          {
            username: user.username,
            sub: tmpUser.id,
          },
          { secret: JWT_SERCRET },
        ),
      };
    }

    return null;
  }
}

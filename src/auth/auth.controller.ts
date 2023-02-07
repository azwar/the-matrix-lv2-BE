import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { LoginDTO } from '../dto/LoginDTO';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @UsePipes(new ValidationPipe({ transform: true }))
  async login(@Body() req: LoginDTO): Promise<any> {
    const result = await this.authService.login(req);

    if (result) {
      return result;
    }

    throw new BadRequestException('Wrong username or password');
  }
}

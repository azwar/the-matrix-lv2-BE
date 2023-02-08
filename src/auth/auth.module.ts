import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { AuthController } from './auth.controller';
import { JWT_SERCRET } from '../utils/Constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({ defaultStrategy: 'bearer' }),
    JwtModule.register({
      secret: JWT_SERCRET,
      signOptions: { expiresIn: '360d' },
    }),
  ],
  providers: [AuthService, UsersService, JwtStrategy, JwtService],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}

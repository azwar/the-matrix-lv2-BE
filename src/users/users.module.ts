import { Module } from '@nestjs/common';
import { ObjectionModule } from '@willsoto/nestjs-objection';
import { config } from '../database/knex';
import { User } from '../database/models/User';
import { UsersService } from './users.service';

@Module({
  imports: [
    ObjectionModule.register({
      Model: User,
      config: config,
    }),
    ObjectionModule.forFeature([User]),
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

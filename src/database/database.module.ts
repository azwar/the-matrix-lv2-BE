import { Global, Module } from '@nestjs/common';
import { Model } from 'objection';
import { knexObj } from './knex';

const providers = [
  {
    provide: 'KnexConnection',
    useFactory: async () => {
      Model.knex(knexObj);
      return knexObj;
    },
  },
];

@Global()
@Module({
  providers: [...providers],
  exports: [...providers],
})
export class DatabaseModule {}

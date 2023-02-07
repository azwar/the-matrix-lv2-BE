import { Model } from 'objection';
import { knexObj } from '../knex';

Model.knex(knexObj);

export class User extends Model {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    return {};
  }
}

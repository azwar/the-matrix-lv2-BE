import { Model } from 'objection';
import { knexObj } from '../knex';

Model.knex(knexObj);

export class Matrix extends Model {
  id: number;
  matrix: string;

  static get tableName() {
    return 'matrixs';
  }

  static get relationMappings() {
    return {};
  }
}

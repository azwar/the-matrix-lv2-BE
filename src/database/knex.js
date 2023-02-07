import * as dbcon from '../../knexfile';
import * as Knex from 'knex';

const environment = process.env.NODE_ENV || 'development';
export const config = dbcon[environment];
export const knexObj = Knex(config);

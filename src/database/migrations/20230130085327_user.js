/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.primary().increments('id');
    table
      .string('first_name', 100)
      .notNullable()
      .checkLength('>', 4)
      .checkLength('<=', 100);
    table
      .string('last_name', 100)
      .notNullable()
      .checkLength('>', 4)
      .checkLength('<=', 100);
    table
      .string('email', 255)
      .notNullable()
      .unique()
      .checkLength('>', 5)
      .checkLength('<=', 255);
    table.string('password', 255).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// eslint-disable-next-line @typescript-eslint/no-empty-function
exports.down = function (knex) {
  return knex.schema.dropTable('users');
};

exports.config = { transaction: false };

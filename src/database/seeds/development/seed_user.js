// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcrypt');

/**
 * @param { import("knex").Knex }
 * @returns { Promise<void> }
 */
exports.seed = async function seed(knex) {
  const saltRounds = 10;
  const password = 'morpheus123';
  const salt = await bcrypt.genSalt(saltRounds);
  const tmpPassword = await bcrypt.hash(password, salt);

  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {
      first_name: 'Morpheus',
      last_name: 'Matrix',
      email: 'morpheus@gmail.com',
      password: tmpPassword,
    },
  ]);
};

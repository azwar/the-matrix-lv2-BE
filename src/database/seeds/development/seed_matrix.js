/**
 * @param { import("knex").Knex }
 * @returns { Promise<void> }
 */
exports.seed = async function seed(knex) {
  await knex('matrixs').del();
  await knex('matrixs').insert([
    {
      matrix: JSON.stringify([
        [1, 4, 7, 8],
        [10, 14, 18, 20],
        [23, 30, 32, 65],
      ]),
    },
    {
      matrix: JSON.stringify([
        [70, 72, 74, 76],
        [81, 83, 85, 87],
        [90, 92, 94, 96],
      ]),
    },
  ]);
};

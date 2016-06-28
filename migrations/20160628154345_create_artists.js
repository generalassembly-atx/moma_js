exports.up = function(knex, Promise) {
  return knex.schema.createTable('artists', function (table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('nationality').notNullable();
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('artists');
};

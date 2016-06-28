exports.up = function(knex, Promise) {
  return knex.schema.createTable('paintings', function (table) {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.integer('artist_id').references('artists.id');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('paintings');
};

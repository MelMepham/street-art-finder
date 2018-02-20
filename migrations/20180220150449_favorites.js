exports.up = function(knex, Promise) {
  return knex.schema.createTable('favorites', (table) => {
    table.increments('id').primary()
    table.integer('artFav_id')
    table.integer('userFav_id')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('favorites')
};

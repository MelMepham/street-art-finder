
exports.up = function(knex, Promise) {
  return knex.schema.createTable('art', (table) => {
    table.increments('id').primary()
    table.date('dateFound')
    table.string('image')
    table.string('artist')
    table.string('address')
    table.string('suburb')
    table.string('description')
    table.string('style')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('art')
};

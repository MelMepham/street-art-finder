
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('loginUsers' , table => {
    table.increments('id')
    table.string('username')
    table.string('hash')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('loginUsers')
};

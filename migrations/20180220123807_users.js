exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('userName')
    table.string('profileImage')
    table.string('bio')
    table.string('instagram')
    table.string('twitter')
    table.string('website')
    table.string('facebook')
    table.string('contactInfo')
    table.integer('art_id')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')

};

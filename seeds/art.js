
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('art').del()
    .then(function () {
      // Inserts seed entries
      return knex('art').insert([
        {id: 101, dateFound: '09052012', image: '', artist: '', address: '', suburb: '', description: '', style: ''},
      ]);
    });
};

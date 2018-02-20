exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 201, userName: 'moo', profileImage: '', bio: 'Hi, I am moo', instagram: '',
       twitter: '', website: 'aplaceofdreams.co.nz', facebook: '',
       contactInfo: 'm.a.mepham@gmail.com'},
      ]);
    });
};

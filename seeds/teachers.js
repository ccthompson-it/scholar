exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('teachers').del()
    .then(function () {
      // Inserts seed entries
      return knex('teachers').insert([
        {teacher_id: 1, firstname: 'Caleb', lastname: 'Thompson', email: 'caleb.thompson@xtra.co.nz', hash: 'password'}
      ]);
    });
};

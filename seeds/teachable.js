exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('teachable').del()
    .then(function () {
      // Inserts seed entries
      return knex('teachable').insert([
        {teachable_id: 1, class_id: 10, teacher_id: 1, level: 11},
        {teachable_id: 2, class_id: 3, teacher_id: 1, level: 13}
      ]);
    });
};

exports.up = function (knex) {
  return knex.schema.createTable('teachers', (table) => {
    table.increments('teacher_id').primary()
    table.string('firstname')
    table.string('lastname')
    table.string('email').unique()
    table.binary('hash')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('teachers')
};

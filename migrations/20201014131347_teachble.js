
exports.up = function(knex) {
  return knex.schema.createTable('teachable', (table) => {
    table.increments('teachable_id').primary()
    table.integer('class_id')
    table.string('teacher_id')
    table.string('level')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('teachable')
};


exports.up = function (knex) {
  return knex.schema.createTable('classes', (table) => {
    table.increments('class_id').primary()
    table.string('class_name')
    table.string('class_area')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('classes')
};

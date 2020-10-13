
exports.up = function(knex) {
  return knex.schema.createTable('quotes', (table) => {
    table.increments('id')
    table.string('quote')
  })
};

exports.down = function(knex){
  return knex.schema.dropTable('quotes')
};

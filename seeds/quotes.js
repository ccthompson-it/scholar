
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quotes').del()
    .then(function () {
      // Inserts seed entries
      return knex('quotes').insert([
        {id: 1, quote: 'Great Scott!'},
        {id: 2, quote: 'Luke, I am your father!'},
        {id: 3, quote: 'I believe ya, but my tommy gun dont'},
      ]);
    });
};

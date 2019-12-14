exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('username').unique();
    table.string('password');
    table.string('token', 1000);
    table.dateTime('dateJoined');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};

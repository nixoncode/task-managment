exports.up = function (knex) {
  return knex.schema.createTable("complainants", function (table) {
    table.increments();
    table.string("name", 100);
  });
};

exports.down = function (knex) {};

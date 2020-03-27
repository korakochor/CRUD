
exports.up = function(knex, Promise) {
    return knex.schema.createTable('breed', (table) => {
        table.increments();
        table.text('name');
        table.text('temperament');
        table.text('life_expectancy');
        table.text('group');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('breed');
};

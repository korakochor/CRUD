
const breeds = require('../breeds');

exports.seed = function(knex, Promise) {
    return knex('breed').del()
        .then(function () {
            return knex('breed').insert(breeds);
        });
};

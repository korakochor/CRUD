const knex = require('./knex'); // the connection!

module.exports = {
    getAll() {
        return knex('breed');
    },
    getOne(id) {
        return knex('breed').where('id', id).first();
    },
    create(breed) {
        return knex('breed').insert(breed, '*');
    },
    update(id, breed) {
        return knex('breed').where('id', id).update(breed, '*');
    },
    delete(id) {
        return knex('breed').where('id', id).del();
    }
};

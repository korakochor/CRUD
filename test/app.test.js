const knex = require('../db/knex');

describe('CRUD breeds', () => {
    before((done) => {
        knex.migrate.latest()
            .then(() => {
                return knex.seed.run();
            }).then(() => done());
    });

    it('Works...', function () {
        console.log('Its working!');
    });
});
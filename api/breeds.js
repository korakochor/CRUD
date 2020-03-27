const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function isValidId(req, res, next) {
    if(!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}

function validBreed(breed) {
    const hasName= typeof breed.name == 'string' && breed.name.trim() != '';
    const hasGroup = typeof breed.group == 'string' && breed.group.trim() != '';
    const hasTemperament = typeof breed.temperament == 'string' && breed.temperament.trim() != '';
    const hasLife_expectancy = typeof breed.life_expectancy == 'string' && breed.life_expectancy.trim() != '';
    return hasName && hasTemperament && hasGroup && hasLife_expectancy;
}

router.get('/', (req, res) => {
    queries.getAll().then(breeds => {
        res.json(breeds);
    });
});

router.get('/:id', isValidId, (req, res, next) => {
    queries.getOne(req.params.id).then(breed => {
        if(breed) {
            res.json(breed);
        } else {
            next();
        }
    });
});

router.post('/', (req, res, next) => {
    if(validBreed(req.body)) {
        queries.create(req.body).then(breeds => {
            res.json(breeds[0]);
        });
    } else {
        next(new Error('Invalid breed'));
    }
});

router.put('/:id', isValidId, (req, res, next) => {
    if(validBreed(req.body)) {
        queries.update(req.params.id, req.body).then(breeds => {
            res.json(breeds[0]);
        });
    } else {
        next(new Error('Invalid breed'));
    }
});

router.delete('/:id', isValidId, (req, res) => {
    queries.delete(req.params.id).then(() => {
        res.json({
            deleted: true
        });
    });
});

module.exports = router;
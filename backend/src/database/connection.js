const knex = require('knex');
const configuration = require('../../knexfile');
<<<<<<< HEAD
const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const  connection = knex(config);

=======

const  connection = knex(configuration.development);
>>>>>>> ac37d29a924af3d2616237c67d4ac0e2d5d22a4b

module.exports = connection;

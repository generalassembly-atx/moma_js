var config = require('./knexfile');
var env = 'development';
var knex = require('knex')(config[env]);

module.exports = require('bookshelf')(knex);

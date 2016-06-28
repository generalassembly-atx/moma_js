var bookshelf  = require('../bookshelf');
var Painting  = require('./painting');

var Artist = module.exports = bookshelf.Model.extend({
  tableName: 'artists',
  paintings: function() {
    return this.hasMany(Painting);
  }
});

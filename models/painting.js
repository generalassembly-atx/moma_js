var bookshelf  = require('../bookshelf');
var Artist = require('./artist');

var Painting = module.exports = bookshelf.Model.extend({
  tableName: 'paintings',
  artist: function() {
    return this.belongsTo(Artist);
  }
});

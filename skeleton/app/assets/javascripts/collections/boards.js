TrelloClone.Collections.Boards = Backbone.Collection.extend({
  initialize: function() {
  },

  model: TrelloClone.Models.Board,

  url: 'api/boards'
});
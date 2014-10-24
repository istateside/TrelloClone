TrelloClone.Collections.BoardLists = Backbone.Collection.extend({
  initialize: function(models, options) {
    this.board = options.board;
  },

  model: TrelloClone.Models.BoardList,

  url: 'api/lists'
});
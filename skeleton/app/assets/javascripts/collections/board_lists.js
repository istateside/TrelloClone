TrelloClone.Collections.BoardLists = Backbone.Collection.extend({
  comparator: 'ord',

  model: TrelloClone.Models.BoardList,

  url: 'api/lists',

  initialize: function(models, options) {
    this.board = options.board;
  },
});

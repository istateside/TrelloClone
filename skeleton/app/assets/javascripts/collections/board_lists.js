TrelloClone.Collections.BoardLists = Backbone.Collection.extend({
  initialize: function() {
  },

  model: TrelloClone.Models.BoardList,

  url: 'api/lists',
});
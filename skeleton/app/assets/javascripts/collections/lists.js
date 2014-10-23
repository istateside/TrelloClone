TrelloClone.Collections.Lists = Backbone.Collection.extend({
  initialize: function() {
  },

  model: TrelloClone.Models.List,

  url: 'api/lists',
});
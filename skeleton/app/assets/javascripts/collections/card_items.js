TrelloClone.Collections.CardItems = Backbone.Collection.extend({
  initialize: function() {
  },

  model: TrelloClone.Models.CardItem,

  url: 'api/cards',
});
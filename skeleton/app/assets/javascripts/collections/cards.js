TrelloClone.Collections.Cards = Backbone.Collection.extend({
  initialize: function() {

  },

  model: TrelloClone.Models.Card,

  url: 'api/cards',
});
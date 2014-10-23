TrelloClone.Collections.ListCards = Backbone.Collection.extend({
  initialize: function() {

  },

  model: TrelloClone.Models.ListCard,

  url: 'api/cards',
});
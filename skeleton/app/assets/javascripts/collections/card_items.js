TrelloClone.Collections.CardItems = Backbone.Collection.extend({
  initialize: function(models, options) {
    this.card = options.card;
  },

  model: TrelloClone.Models.CardItem,

  url: 'api/cards',
});
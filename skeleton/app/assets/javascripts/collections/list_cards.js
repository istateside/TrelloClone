TrelloClone.Collections.ListCards = Backbone.Collection.extend({
  initialize: function(models, options) {
    this.list = options.list;
  },

  comparator: 'ord',

  model: TrelloClone.Models.ListCard,

  url: 'api/cards',
});
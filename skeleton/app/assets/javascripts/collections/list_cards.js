TrelloClone.Collections.ListCards = Backbone.Collection.extend({
  initialize: function() {

  },

  comparator: 'ord',

  model: TrelloClone.Models.ListCard,

  url: 'api/cards',
});
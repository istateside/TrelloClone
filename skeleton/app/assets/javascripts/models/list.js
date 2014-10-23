TrelloClone.Models.List = Backbone.List.extend({
  parse: function(payload) {
  if (payload.cards) {
    this.cards().set(payload.cards, { parse: true });
    delete payload.cards;
  }

  return payload;
  }
});
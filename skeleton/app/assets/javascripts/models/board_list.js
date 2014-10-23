TrelloClone.Models.BoardList = Backbone.Model.extend({
  parse: function(payload) {
  if (payload.cards) {
    this.cards().set(payload.cards, { parse: true });
    delete payload.cards;
  }

  return payload;
  }
});
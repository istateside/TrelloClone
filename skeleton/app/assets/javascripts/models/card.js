TrelloClone.Models.Card = Backbone.List.extend({
  parse: function(payload) {
  if (payload.items) {
    this.items().set(payload.items);
    delete payload.items;
  }

  return payload;
  }
});
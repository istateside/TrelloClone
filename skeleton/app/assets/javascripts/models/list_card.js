TrelloClone.Models.ListCard = Backbone.Model.extend({
  items: function() {
    this._items = this._items ||
    new TrelloClone.Collections.CardItems([], { card: this });
    return this._items;
  },

  parse: function(payload) {
  if (payload.items) {
    this.items().set(payload.items, { parse: true });
  }

  return payload;
  }
});
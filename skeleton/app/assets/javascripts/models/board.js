TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: 'api/boards',

  parse: function(payload) {
    if (payload.lists) {
      this.lists().set(payload.lists, { parse: true });
      delete payload.lists;
    }
  }
});
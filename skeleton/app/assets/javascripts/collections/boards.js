TrelloClone.Collections.Boards = Backbone.Collection.extend({
  initialize: function() {
  },

  model: TrelloClone.Models.Board,

  url: 'api/boards',

  getOrFetch: function(id) {

    if (this.get(id)) {
      return this.get(id)
    } else {
      var model = new TrelloClone.Models.Board({
        id: id
      });

      this.add(model);
      model.fetch({
        success: function() {
          return model
        }
      });
    }
  }
});
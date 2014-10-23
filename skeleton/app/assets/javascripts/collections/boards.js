TrelloClone.Collections.Boards = Backbone.Collection.extend({
  initialize: function() {
    this.fetch();
    this.listenTo
  },

  model: TrelloClone.Models.Board,

  url: 'api/boards',

  getOrFetch: function(id) {
    var model = this.get(id)
    if (!model) {
      model = new TrelloClone.Models.Board({
        id: id
      });

      this.add(model);
    }

    model.fetch();
    return model
  }
});
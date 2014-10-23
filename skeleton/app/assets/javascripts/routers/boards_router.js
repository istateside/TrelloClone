TrelloClone.Routers.Boards = Backbone.Router.extend({
  initialize: function (options) {
    this.$el = options.$el;
  },

  routes: {
    '': 'index',
    'new': 'newBoard'
  },

  index: function() {
    var that = this;
    TrelloClone.boards.fetch({success: function() {
      var indexView = new TrelloClone.Views.BoardsIndex({
        collection: TrelloClone.boards
      });

      that.$el.html(indexView.render().$el);
    }});
  },

  newBoard: function() {
    var that = this;
    TrelloClone.boards.fetch({success: function() {
      var newView = new TrelloClone.Views.BoardsNew({
        collection: TrelloClone.boards
      });

      that.$el.html(newView.render().$el);
    }});
  }
});
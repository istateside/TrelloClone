TrelloClone.Routers.Boards = Backbone.Router.extend({
  initialize: function (options) {
    this.$el = options.$el;
    this._currentView = null;
  },

  routes: {
    '': 'index',
    'board/new': 'newBoard',
    'board/:id': 'showBoard'
  },

  index: function() {
    var that = this;
    TrelloClone.boards.fetch({success: function() {
      var indexView = new TrelloClone.Views.BoardsIndex({
        collection: TrelloClone.boards
      });

      that._swapView(indexView);
    }});
  },

  newBoard: function() {
    var that = this;
    TrelloClone.boards.fetch({ success: function() {
      var newView = new TrelloClone.Views.BoardsNew({
        collection: TrelloClone.boards
      });

      that._swapView(newView);
    }});
  },

  showBoard: function(id) {
    var board = TrelloClone.boards.getOrFetch(id);
    var boardView = new TrelloClone.Views.BoardsShow({
      model: board
    });

    this._swapView(boardView);
    // append all lists

    // append cards


  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$el.html(view.render().$el);
  }
});
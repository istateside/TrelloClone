TrelloClone.Routers.Router = Backbone.Router.extend({
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
    TrelloClone.Collections.boards.fetch();

    var view = new TrelloClone.Views.BoardsIndex({
      collection: TrelloClone.Collections.boards
    })

    this._swapView(view);
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
    var board = TrelloClone.Collections.boards.getOrFetch(id);
    
    var boardView = new TrelloClone.Views.BoardsShow({
      model: board
    });

    this._swapView(boardView);
  },

  _swapView: function(view) {
    var that = this;
    $('div.content').fadeOut(200, function() {
      that._currentView && that._currentView.remove();
      that._currentView = view;
      that.$el.html(view.render().$el);
      $('div.content').fadeIn(200);
    });
  }
});

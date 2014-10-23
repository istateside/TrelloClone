window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    window.TrelloClone.boards = new TrelloClone.Collections.Boards();
    TrelloClone.boards.fetch();

    TrelloClone.router = new TrelloClone.Routers.Boards({
      "$el": $('div.content')
    });

    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});

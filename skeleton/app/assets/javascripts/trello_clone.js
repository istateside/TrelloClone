window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},
  initialize: function() {
    window.TrelloClone.boards = new TrelloClone.Collections.Boards();
    TrelloClone.boards.fetch();

    TrelloClone.router = new TrelloClone.Routers.Router({
      "$el": $('div.content')
    });

    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});

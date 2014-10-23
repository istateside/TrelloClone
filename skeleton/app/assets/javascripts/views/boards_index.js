TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'remove', this.render);
  },

  template: JST['boards/index'],

  events: {
    "click .delete-btn": "deleteBoard"
  },

  getBoard: function(event) {
    var board_id = $($(event.currentTarget).parent()).data('id');
    var board = this.collection.get(board_id);
    return board;
  },

  deleteBoard: function(event){
    event.preventDefault();
    TrelloClone.boards.remove(this.getBoard(event).destroy());
  },

  render: function() {
    var content = this.template({
      boards: this.collection
    });

    this.$el.html(content);
    return this;
  }
})
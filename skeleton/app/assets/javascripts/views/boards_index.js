TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'remove', this.render);
  },
  events: {
    "click #delete-btn": "deleteBoard"
  },
  deleteBoard: function(event){
    var board_id = $(event.currentTarget).data('id');

    var board = this.collection.get(board_id);

    board.destroy();
  },
  template: JST['boards/index'],
  render: function() {
    var content = this.template({
      boards: this.collection
    });

    this.$el.html(content);
    return this;
  }
})
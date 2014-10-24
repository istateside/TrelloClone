TrelloClone.Views.ListsNew = Backbone.View.extend({
  initialize: function() {
    this.subViews = [];
  },
  events: {
    "submit": "submit"
  },
  tagName: 'div',
  className: 'list-div new-list',
  template: JST['lists/new'],
  render: function() {
    var content = this.template();

    this.$el.html(content);
    return this;
  },
  leave: function() {
    this.subViews.forEach(function(subView) {
      subView.leave();
    });
    this.remove();
  },
  submit: function (event) {
    event.preventDefault();

    var params = $(event.target).serializeJSON();
    params.board_id = this.collection.board.id;
    var newList = this.collection.create(params);
  }
});
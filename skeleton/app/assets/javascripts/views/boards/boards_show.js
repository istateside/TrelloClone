TrelloClone.Views.BoardsShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "change sync", this.render);
    this.subViews = [];
  },

  template: JST['boards/show'],
  tagName: 'div',
  className: 'board-div',

  render: function() {
    var content = this.template({
      board: this.model
    });

    this.$el.html(content);

    var that = this;
    var lists = this.model.lists();

    lists.each(function(list) {

      var view = new TrelloClone.Views.ListsShow({ model: list });

      that.subViews.push(view);
      that.$('div.list-list').append(view.render().$el);
    });

    return this;
  },

  leave: function() {
    this.subViews.forEach(function(subView) {
      subView.leave();
    });
    this.remove();
  }
});
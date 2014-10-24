TrelloClone.Views.BoardsShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "change sync", this.render);
    this.listenTo(this.model.lists(), "change sync remove", this.render)
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
    var $listDiv = that.$('div.list-list');
    var lists = this.model.lists();

    lists.each(function(list) {

      var view = new TrelloClone.Views.ListsShow({ model: list });

      that.subViews.push(view);
      $listDiv.append(view.render().$el);
    });

    var newListView = new TrelloClone.Views.ListsNew({ collection: this.model.lists() });
    this.subViews.push(newListView);
    $listDiv.append(newListView.render().$el)

    return this;
  },

  leave: function() {
    this.subViews.forEach(function(subView) {
      subView.leave();
    });
    this.remove();
  }
});
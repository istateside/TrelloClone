TrelloClone.Views.BoardsShow = Backbone.CompositeView.extend({

  template: JST['boards/show'],

  tagName: 'div',

  className: 'board-div group',

  events: {
    'sortstop': 'saveOrds'
  },

  orderOptions: {
    modelElement: 'div.list-div',
    modelName: "list",
    subviewContainer: ".list-list"
  },

  initialize: function() {
    this.collection = this.model.lists();
    this.listenTo(this.collection, "add", this.addList);
  },

  addList: function(list) {
    var view = new TrelloClone.Views.ListShow({
      model: list,
      collection: list.cards()
    });
    this.addSubview('div.list-list', view);
  },

  render: function() {
    var content = this.template({
      board: this.model
    });
    this.$el.html(content);
    this.renderLists();
    return this;
  },

  renderLists: function() {
    this.model.lists().each(this.addList.bind(this));
    this.$('.list-list').sortable({items: '> .board-list'});
  },

  leave: function() {
    this.subViews.forEach(function(subView) {
      subView.leave();
    });
    this.remove();
  }
});
_.extend(TrelloClone.Views.BoardsShow.prototype, TrelloClone.Utils.OrderedView);

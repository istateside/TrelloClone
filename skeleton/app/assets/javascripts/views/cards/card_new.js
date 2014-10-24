TrelloClone.Views.CardsShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "sync change", this.render);
    this.subViews = [];
  },

  tagName: 'div',
  className: 'card-div panel panel-default',

  template: JST['cards/show'],

  render: function() {
    var content = this.template({ card: this.model });
    this.$el.html(content);

    var that = this;
    var items = this.model.items();

    items.each(function(item) {
      var view = new TrelloClone.Views.ItemsShow({ model: item });
      that.subViews.push(view);
      that.$('ul.item-list').append(view.render().$el);
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
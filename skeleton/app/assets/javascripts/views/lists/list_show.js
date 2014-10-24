TrelloClone.Views.ListsShow = Backbone.View.extend({
  initialize: function() {
    this.subViews = [];
  },
  tagName: 'div',

  className: 'list-div',

  template: JST['lists/show'],

  render: function() {
    var content = this.template({ list: this.model });

    this.$el.html(content);

    var that = this;
    var cards = this.model.cards();

    cards.each(function (card) {
      var view = new TrelloClone.Views.CardsShow({ model: card });
      that.subViews.push(view);
      that.$('div.card-list').append(view.render().$el);
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
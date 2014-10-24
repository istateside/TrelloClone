TrelloClone.Views.ListsShow = Backbone.View.extend({
  initialize: function() {
    this.subViews = [];
    this.listenTo(this.model.cards(), "change sync remove", this.render)
  },
  tagName: 'div',
  className: 'list-div',
  template: JST['lists/show'],
  events: {
    "click .delete-btn": "deleteList"
  },
  render: function() {
    var content = this.template({ list: this.model });

    this.$el.html(content);

    var that = this;
    var $cardDiv = this.$('div.card-list')
    var cards = this.model.cards();

    cards.each(function (card) {
      var view = new TrelloClone.Views.CardsShow({ model: card });
      that.subViews.push(view);
      $cardDiv.append(view.render().$el);
    });

    var newCardView = new TrelloClone.Views.CardsNew({ collection: this.model.cards()});
    this.subViews.push(newCardView);
    $cardDiv.append(newCardView.render().$el)
    return this;
  },
  deleteList: function() {
    event.preventDefault();
    console.log("Click!");
    console.log(this.model)
    this.model.destroy();
  },
  leave: function() {
    this.subViews.forEach(function(subView) {
      subView.leave();
    });

    this.remove();
  }
});
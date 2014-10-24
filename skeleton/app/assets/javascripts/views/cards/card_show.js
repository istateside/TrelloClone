TrelloClone.Views.CardsShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "sync change", this.render);
    this.subViews = [];
  },
  events: {
    "click .delete-btn": "deleteCard"
  },
  tagName: 'div',
  className: 'card-div panel panel-default',

  template: JST['cards/show'],

  render: function() {
    var content = this.template({ card: this.model });
    this.$el.html(content);

    var $itemDiv = this.$('ul.item-list');
    var items = this.model.items();
    var that = this;

    items.each(function(item) {
      var view = new TrelloClone.Views.ItemsShow({ model: item });
      that.subViews.push(view);
      $itemDiv.append(view.render().$el);
    });

    var newItemView = new TrelloClone.Views.ItemsNew({ model: new TrelloClone.Models.CardItem });
    this.subViews.push(newItemView);
    $itemDiv.append(newItemView.render().$el)
    return this;
  },

  leave: function() {
    this.subViews.forEach(function(subView) {
      subView.leave();
    });
    this.remove();
  },
  deleteCard: function() {
    event.preventDefault();
    console.log("Click!");
    console.log(this.model)
    this.model.destroy();
  }
});
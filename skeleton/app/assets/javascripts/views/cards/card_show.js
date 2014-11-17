TrelloClone.Views.CardsShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "sync change", this.render);
    this.listenTo(this.model.items(), 'add', this.newItem);
    this.subViews = [];
  },

  events: {
    "click .delete-btn": "deleteCard"
  },

  tagName: 'div',
  className: 'card-div list-card panel panel-default',

  attributes: function() {
    return {
      'data-card-id': this.model.id
      }
  },

  template: JST['cards/show'],

  render: function() {
    var content = this.template({ card: this.model });
    this.$el.html(content);

    var $itemDiv = this.$('ul.item-list');
    var items = this.model.items();
    var that = this;

    // items.each(function(item) {
    //   var view = new TrelloClone.Views.ItemsShow({
    //     model: item,
    //     collection: items
    //   });
    //   that.subViews.push(view);
    //   $itemDiv.append(view.render().$el);
    // });
    //
    // var newItemView = new TrelloClone.Views.ItemsNew({
    //   collection: items
    // });
    // this.subViews.push(newItemView);
    // $itemDiv.append(newItemView.render().$el)

    return this;
  },

  newItem: function(item) {
    var view = new TrelloClone.Views.ItemsShow({
      model: item,
      collection: this.model.items()
    });
    this.subViews.push(view);

    this.$('ul.item-list').append(view.render().$el);
  },

  leave: function() {
    this.subViews.forEach(function(subView) {
      subView.leave();
    });
    this.remove();
  },

  deleteCard: function() {
    event.preventDefault();
    this.model.destroy();
  }
});

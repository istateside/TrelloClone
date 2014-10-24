TrelloClone.Views.ItemsShow = Backbone.View.extend({
  initialize: function() {
  },
  tagName: 'li',

  className: 'item list-group-item',

  template: JST['items/show'],

  render: function() {
    var content = this.template({ item: this.model });
    this.$el.html(content);
    return this;
  }
});
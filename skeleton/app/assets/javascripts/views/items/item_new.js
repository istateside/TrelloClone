TrelloClone.Views.ItemsNew = Backbone.View.extend({
  initialize: function() {
  },
  tagName: 'li',

  className: 'item new-item list-group-item',

  template: JST['items/new'],

  render: function() {
    var content = this.template({ item: this.model });
    this.$el.html(content);
    return this;
  }
});
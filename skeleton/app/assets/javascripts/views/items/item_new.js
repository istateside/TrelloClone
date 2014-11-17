TrelloClone.Views.ItemsNew = Backbone.View.extend({
  initialize: function() {
  },
  tagName: 'li',

  className: 'item new-item list-group-item',

  events: {
    "submit form.item-form": "submit"
  },

  template: JST['items/new'],

  render: function() {
    var content = this.template({ item: this.model });
    this.$el.html(content);
    return this;
  },

  submit: function(event) {
    event.preventDefault();

    var params = $(event.target).serializeJSON();
    params.card_id = this.collection.card.id;
    var newItem = this.collection.create(params);
  }
});

TrelloClone.Views.CardsNew = Backbone.View.extend({
  initialize: function() {
    this.subViews = [];
  },
  events: {
    "submit form.card-form": "submit"
  },

  tagName: 'div',
  className: 'card-div new-card panel panel-default',

  template: JST['cards/new'],

  render: function() {
    var content = this.template();

    this.$el.html(content);
    return this;
  },

  leave: function() {
    this.subViews.forEach(function(subView) {
      subView.leave();
    });
    this.remove();
  },

  submit: function (event) {
    event.preventDefault();
    var params = $(event.target).serializeJSON();
    params.list_id = this.collection.list.id;
    var newCard = this.collection.create(params);
  }
});

TrelloClone.Views.BoardsShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "change", this.render)
  },

  template: JST['boards/show'],

  render: function() {
    var content = this.template({
      board: this.model
    });

    this.$el.html(content);
    return this;
  }
});
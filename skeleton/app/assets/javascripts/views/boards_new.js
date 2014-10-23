TrelloClone.Views.BoardsNew = Backbone.View.extend({
  template: JST["boards/new"],

  events: {
    "submit form": "submit"
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);

    return this;
  },

  submit: function (event) {
    console.log("Submit!")
    event.preventDefault();

    var params = $(event.currentTarget).serializeJSON();
    var newBoard = new TrelloClone.Models.Board(params["board"]);

    newBoard.save({}, {
      success: function () {
        TrelloClone.boards.add(newBoard);
      }
    });
  }
});
TrelloClone.Views.ItemsShow = Backbone.View.extend({
  initialize: function() {
  },

  events: {
    "click": "toggleDone"
  },

  tagName: 'li',

  className: 'item card-item list-group-item',

  template: JST['items/show'],

  render: function() {
    var content = this.template({ item: this.model });
    this.$el.html(content);
    if (this.model.get('done')) {
      this.$el.addClass('done');
    }
    return this;
  },

  toggleDone: function(event) {
    event.preventDefault();
    var that = this;
    var item = this.model;
    item.save(
      {
        done: !item.get('done')
      },

      {
        patch: true,
        success: function() {
          that.$el.toggleClass('done');
        }
      }
    );
  }
});

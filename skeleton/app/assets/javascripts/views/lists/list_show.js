TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  orderOptions: {
    modelElement: 'div.list-card',
    modelName: "card",
    subviewContainer: ".card-list"
  },

  tagName: 'div',

  className: 'list-div board-list',

  template: JST['lists/show'],

  attributes: function() {
    return { 'data-list-id': this.model.id }
  },

  events: {
    "click .delete-btn": "deleteList",
    "sortreceive": "receiveCard",
    "sortstop": "saveCards",
    "sortremove": "removeCard"
  },

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.cards(), "add", this.addCard);
  },

  addCard: function(card) {
    var view = new TrelloClone.Views.CardsShow({ model: card });
    this.addSubview('.card-list', view)
  },

  deleteList: function() {
    event.preventDefault();
    this.model.destroy();
  },

  leave: function() {
    this.subViews.forEach(function(subView) {
      subView.leave();
    });

    this.remove();
  },

  render: function() {
    var that = this;
    var content = this.template({ list: this.model });
    this.$el.html(content);
    this.$el.data('list-id', this.model.id);

    this.renderCards();
    return this;
  },

  renderCards: function()  {
    this.model.cards().each(this.addCard.bind(this));
    this.$('.card-list').sortable({connectWith: '.card-list'});
  },

  receiveCard: function(event, ui) {
    var $cardList = ui.item,
        cardId = $cardList.data('id'),
        newOrd = $cardList.index();

    var card = new TrelloClone.Models.Card(
      {
        id: cardId,
        list_id: this.model.id,
        ord: newOrd
      }
    );
    card.save();
    this.collection.add(card, {silent: true});
    this.saveCards(event);
  },

  removeCard: function(event, ui) {
    var $cardDiv = ui.item,
      cardId = $cardDisplay.data('card-id'),
      cards = this.model.cards(),
      cardToRemove = cards.get(cardId),
      cardSubviews = this.subviews('.card-list');
    cards.remove(cardToRemove);

    var subviewToRemove = _.findWhere(cardSubviews, {model: cardToRemove});
    cardSubviews.splice(cardSubviews.indexOf(subviewToRemove), 1);
  },

  saveCards: function(event) {
    event.stopPropagation();
    this.saveOrds();
  }
});

_.extend(TrelloClone.Views.ListShow.prototype, TrelloClone.Utils.OrderedView);

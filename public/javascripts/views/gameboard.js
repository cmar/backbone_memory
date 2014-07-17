 var GameBoard = Backbone.View.extend({

  render: function() {
    this.collection.each(function(card) {
      var cardView = new CardView({ model: card })
      this.$el.append(cardView.render().el)
    }, this)

    return this
  }
})

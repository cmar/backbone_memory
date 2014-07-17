var Deck = Backbone.Collection.extend({
  model: Card,
  url: 'deck.json',

  initialize: function() {
    this.on("change:selected", this.evaluate, this)
  },

  evaluate: function(card, value) {
    if (!value) { return }

    var selected = this.selected()

    if (selected.length == 2) {
      if (selected[0].matches(selected[1])) {
        _.each(selected, function(card) { card.match() })
      } else {
        this.invoke('lock')

        _.delay(function(deck) {
          deck.invoke('unselect')
          deck.invoke('unlock')
        }, 1000, this)
      }

      if (this.allMatched()) {
        this.trigger("all:matched")
      }
    }
  },

  selected: function() {
    return this.where({ selected: true })
  },

  allMatched: function() {
    return this.every(function(card) { return card.isMatched() })
  }
})

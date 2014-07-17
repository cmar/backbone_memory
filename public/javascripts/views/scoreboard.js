 var ScoreBoard = Backbone.View.extend({

  initialize: function() {
    this.totalSelected = 0
    this.totalMatched = 0

    this.collection.on("change:selected", this.incrementSelected, this)
    this.collection.on("change:matched", this.incrementMatched, this)
    this.collection.on("all:matched", this.winner, this)
  },

  incrementSelected: function(model, value) {
    if (value) {
     this.totalSelected++
     this.$(".click-score").html(this.totalSelected)
   }
  },

  incrementMatched: function(model, value) {
    if (value) {
     this.totalMatched += .5
     this.$(".match-score").html(this.totalMatched)
   }
  },

  winner: function() {
    $('#you-win').show()
  }
})

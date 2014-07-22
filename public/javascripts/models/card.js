var Card = Backbone.Model.extend({
  defaults: {
    "selected": false,
    "matched": false,
    "locked": false
  },

  select: function() {
    if (!this.canSelect()) { return }
    this.set("selected", true)
  },

  unselect: function() {
    this.set("selected", false)
  },

  isSelected: function() {
    return this.get("selected")
  },

  canSelect: function() {
    return _.matches({ matched: false, locked: false, selected: false })(this.attributes)
  },

  lock: function() {
    this.set("locked", true)
  },

  unlock: function() {
    this.set("locked", false)
  },

  match: function() {
    this.set({ matched: true, selected: false })
  },

  isMatched: function() {
    return this.get("matched")
  },

  matches: function(other) {
    return this.get("name") == other.get("name")
  }
})

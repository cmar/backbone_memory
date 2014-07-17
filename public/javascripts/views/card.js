var CardView = Backbone.View.extend({
  tagName: "div",
  className: "col-md-2",
  template: _.template($("#card_template").html()),

  events: {
    "click": "select"
  },

  initialize: function() {
    this.model.on("change:selected", this.updateStyles, this)
  },

  render: function() {
    $(this.el).html(this.template(this.model.attributes))
    this.updateStyles()
    return this
  },

  updateStyles: function(model, value) {
    this.$('.card').removeClass("selected matched")

    if (this.model.isMatched()) {
      this.$('.card').addClass("matched")
    } else if (this.model.isSelected()) {
      this.$('.card').addClass("selected")
    }
  },

  select: function(element) {
    this.model.select()
  }
})

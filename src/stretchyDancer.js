var StretchyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  

};

StretchyDancer.prototype = Object.create(Dancer.prototype);
StretchyDancer.prototype.constructor = StretchyDancer;

StretchyDancer.prototype.step = function() {
  this.oldStep = Dancer.prototype.step;
  this.oldStep();

  this.$node.animate({
    height: $("body").height() * Math.random() / 20,
    width: $("body").width() * Math.random() / 20
  });
};
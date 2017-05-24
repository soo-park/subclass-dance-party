var StretchyDancer = function(top, left, timeBetweenSteps) {
  var timeBetweenSteps = 5;  
  Dancer.call(this, top, left, timeBetweenSteps);

};

StretchyDancer.prototype = Object.create(Dancer.prototype);
StretchyDancer.prototype.constructor = StretchyDancer;

StretchyDancer.prototype.step = function() {
  this.oldStep = Dancer.prototype.step;
  this.oldStep();
  
  this.$node.animate({
    height: $("img").height() * Math.random(),
    width: $("img").width() * Math.random()
  });
};
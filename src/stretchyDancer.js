var StretchyDancer = function(top, left, timeBetweenSteps) {
  var timeBetweenSteps = 10;  
  Dancer.call(this, top, left, timeBetweenSteps);

};

StretchyDancer.prototype = Object.create(Dancer.prototype);
StretchyDancer.prototype.constructor = StretchyDancer;

StretchyDancer.prototype.step = function() {
  this.oldStep = Dancer.prototype.step;
  this.oldStep();
  console.log(this.$node);
  this.$node.animate({
    height: $("img").height() * Math.random(),
    width: $("img").width() * Math.random()
  });
};
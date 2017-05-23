var BouncyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function() {
  this.oldStep = Dancer.prototype.step;
  this.oldStep();
  
  this.$node.animate({
    left: $("body").width() * Math.random() - 50,
    top: $("body").height() * Math.random() - 50
  }, 3000);

};
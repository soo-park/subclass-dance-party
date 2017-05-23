var Dancer = function(top, left, timeBetweenSteps) {  
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  var currentDancer = this;
  
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  // POSSIBLE ALTERNATIVE FOR SETTIMEOUT 
  // setTimeout(function() {
  //   console.log(currentDancer, 'right side'); 
  //   currentDancer.step();
  // }, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


describe('stretchyDancer', function() {

  var stretchyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    stretchyDancer = new StretchyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(stretchyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(stretchyDancer.$node, 'animate');
    stretchyDancer.step();
    expect(stretchyDancer.$node.animate.called).to.be.true;
  });

});

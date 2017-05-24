
$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
  
    var cardNumber = Math.floor(Math.random() * 8) + 1;

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    
    dancer.$node.mouseover(function() {
      // $(this).prev().remove();
      $(this).remove();
      window.dancers.splice(window.dancers.indexOf(this));
    });
    
    dancer.$node.addClass(dancerMakerFunctionName);
    dancer.$node.html('<img class="dancerImage" src ="./static/card' + cardNumber + '.png"/>');
    window.dancers.push(dancer);
  });

  $('#closestDies').on('click', function(){
    var shortestDistance = $("body").width();
    var objectsWithShortestDistance = [];
    for (let i = 0; i < window.dancers.length; i++) {
      for (let j = 0; j < window.dancers.length; j++) {
        if (i !== j) {
          var cardPosY1 = window.dancers[i].$node.position().top;
          var cardPosX1 = window.dancers[i].$node.position().left;
          var cardPosY2 = window.dancers[j].$node.position().top;
          var cardPosX2 = window.dancers[j].$node.position().left;
          
          var distance = Math.sqrt(Math.pow((cardPosX2 - cardPosX1), 2) + Math.pow((cardPosY2 - cardPosY1), 2));
          if (distance < shortestDistance) {
            shortestDistance = distance;
            objectsWithShortestDistance = [window.dancers[i], window.dancers[j]];
          }
        }
      }
    }
    
    objectsWithShortestDistance.forEach(dancer => {
      dancer.$node.remove();
      window.dancers.splice(window.dancers.indexOf(dancer));
    });
  });

  $('#lineUp').on('click', function(event) {
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].$node.css({top: $("body").height()/2});
    }
  });
});
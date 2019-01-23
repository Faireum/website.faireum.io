$(document).ready(function() {
  $('.business__infographic').mousemove(function(e){

    var parentOffset = $(this).parent().offset(); 

    var relY = e.pageY - parentOffset.top;      
    var relX = e.pageX - parentOffset.left;
    
    $('.business__infographic-shadow').css({'top': - relY/20}); 
    $('.business__infographic-shadow').css({'right': relX/20});

  });
});
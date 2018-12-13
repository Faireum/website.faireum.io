function card() {
  let cards  = $('.card__inner');

  if (!cards) {
   return;
  }    

  cards.each(function() { 
    let c = $(this);

    let isRotating = false

    let rotate = function() {
      if(!isRotating) {
          isRotating = true
          let cName = $(this).data('toggle-class');
          $(this).toggleClass(cName);
          setTimeout(function () {
              isRotating = false
          }, 1000)
      }
    };
    
    c.on('click', rotate);

    c.on('mouseover', rotate);
    // c.on('mouseout', rotate);
  });
  
}

$(document).ready(card);
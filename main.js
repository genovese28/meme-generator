$(function() {
  $('form').on('submit', function(event) {
    // this prevents the page from reloading
    //  which is the default form action
    event.preventDefault();
    // this variable points to the jQuery element
    //let $topText = $('#top');
    // // this variable is just a string
    let topText = $('#top').val();
    let bottomText = $('#bottom').val();
    let gif = $('#url').val();

    let newParagraph = $(`<H1>${topText}</H1>`);
    let newImage = $(
      `<img src=${gif} alt= 'Be Happy' height= '300' width= '300'> `
    );
    //<img src="smiley.gif" alt="Smiley face" height="42" width="42">
    let bottomLine = $(`<H1>${bottomText}</H1>`);
    // // add a CSS class to it
    // newParagraph.addClass('thing');
    // // add it to the div id="container"
    $('#container')
      .append(newParagraph)
      .append(newImage)
      .append(bottomLine);

    $('#btn').click(function() {
      /* Single line Reset function executes on click of Reset Button */
      $('#form')[0].reset();
    });

    $('#btn').click(function() {
      $(newParagraph).hide();
      $(newImage).hide();
      $(bottomLine).hide();
    });
  });
});

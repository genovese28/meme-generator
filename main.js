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

    let newParagraph = $(`<p>${topText}</p>`);
    let newImage = $(`<p>${gif} </p>`);

    let bottomLine = $(`<p>${bottomText}</p>`);
    // // add a CSS class to it
    // newParagraph.addClass('thing');
    // // add it to the div id="container"
    $('#container')
      .append(newParagraph)
      .append(newImage)
      .append(bottomLine);
  });
});

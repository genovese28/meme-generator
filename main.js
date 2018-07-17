$(function() {
  $('form').on('submit', function(event) {
    // this prevents the page from reloading
    //  which is the default form action
    event.preventDefault();
    // this variable points to the jQuery element
    let $topText = $('#top');
    // this variable is just a string
    let topText = $topText.val();

    let newParagraph = $(`<p>The top text is ${topText}</p>`);
    // add a CSS class to it
    newParagraph.addClass('thing');
    // add it to the div id="container"
    $('#container').append(newParagraph);
  });
});

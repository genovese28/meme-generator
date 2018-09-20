$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed');
});

//click on x to delete todo

$('ul').on('click', 'span', function(event) {
  $(this)
    .parent()
    .fadeOut(1000, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  //13 is code for enter key
  if (event.which === 13) {
    let todoItem = $(this).val();
    $(this).val('');

    //append to ul
    $('ul').append(
      "<li><span><i class='fas fa-trash-alt'></i></span>" + todoItem + '</li>'
    );
  }
});

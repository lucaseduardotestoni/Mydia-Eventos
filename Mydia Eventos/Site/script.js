//Chamada de evento on click no Menu para efeito de transição da entrada do menu
$('body').on('click', '.nav-trigger', function () {
  $(this).toggleClass('on');
  $('.nav-menu').fadeToggle(300);
});



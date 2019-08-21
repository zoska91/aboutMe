const start = setTimeout(() => {
  $('.icons').addClass('on-effect');
  $('.links').addClass('on-effect');
  $('.header-button').addClass('on-effect');
}, 200);

const articleFromTop = $('article').offset().top;
const WindowHeight = $(window).height();
const photoFromTop = $('.photo').offset().top;
const filtersFromTop = $('.filters').offset().top;

$(document).on('scroll', function() {
  const scrollValue = $(this).scrollTop();

  //header

  if (scrollValue < WindowHeight / 2) $('.header-button').addClass('on-effect');
  else $('.header-button').removeClass('on-effect');

  if (scrollValue < WindowHeight / 2) $('.icons').addClass('on-effect');
  else $('.icons').removeClass('on-effect');

  if (scrollValue < WindowHeight / 2) $('.links').addClass('on-effect');
  else $('.icons').removeClass('on-effect');

  //aboutMe

  if (scrollValue > articleFromTop - WindowHeight)
    $('article').addClass('on-effect');
  else $('article').removeClass('on-effect');

  if (scrollValue > photoFromTop - WindowHeight)
    $('.photo').addClass('on-effect');
  else $('.photo').removeClass('on-effect');

  //projects
  if (scrollValue > filtersFromTop - WindowHeight)
    $('.filters').addClass('on-effect');
  else $('.filters').removeClass('on-effect');

  $(function() {
    const projects = [...document.querySelectorAll('.project')];

    $.each(projects, function(index, place) {
      const projectPlaceFromTop = $(this).offset().top;
      const projectPlaceHeight = $(this).outerHeight();

      if (scrollValue > projectPlaceFromTop - WindowHeight) {
        $(this).addClass('on-effect');
      }
    });
  });
});
